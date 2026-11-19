const CACHE_VERSION = 'v26';
const CACHE_NAME = `jupeb-qb-${CACHE_VERSION}`;

// Everything the app needs to open, saved when the service worker installs, so a
// student who has visited once can study offline. (Keep this list in step with the
// files linked in index.html. A missing file here stops the install, so only list
// files that exist.)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/style.css',
  '/welcome.css',
  '/exam-mode.css',
  '/topic-counts.css',
  '/home.css',
  '/dashboard.css',
  '/nav.css',
  '/study.css',
  '/account.css',
  '/firebase-config.js',
  '/topic-resources.js',
  '/notes/physics.js',
  '/notes/chemistry.js',
  '/notes/biology.js',
  '/notes/maths.js',
  '/script.js',
  '/exam-mode.js',
  '/auth.js',
  '/home-screen.js',
  '/welcome.js',
  '/ui.js',
  '/images/jupeb-icon.png',
  '/favicon.ico',
  '/icon-192.png'
];

// Outside files, saved at install too when their servers allow it. If one can't be
// saved now, the install still succeeds and it is saved the first time it loads.
const OPTIONAL_ASSETS = [
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
];

// Outside files the app needs to start, saved the first time they load so the
// app also opens offline: the Firebase scripts, fonts, icons and MathJax.
const SAVE_FROM_HOSTS = [
  'www.gstatic.com',          // Firebase scripts (firebasejs)
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com',
  'cdn.jsdelivr.net'
];

// Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE).then(() => Promise.all(
        OPTIONAL_ASSETS.map(url => fetch(url, { mode: 'no-cors' })
          .then(response => cache.put(url, response))
          .catch(() => { /* saved later, the first time it loads */ }))
      )))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Network first; save good answers; fall back to the saved copy when offline
function networkFirst(request) {
  return fetch(request)
    .then(response => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
      }
      return response;
    })
    .catch(() => caches.match(request));
}

// Fetch event
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Only plain page/file downloads are handled here. Everything else (Firebase
  // sign-in and database traffic, form posts) goes straight to the network.
  if (request.method !== 'GET') return;

  // --- Outside files ---
  if (url.origin !== self.location.origin) {
    if (!SAVE_FROM_HOSTS.includes(url.hostname)) return;   // e.g. Firestore, Google sign-in: leave alone
    // Cache first: these files never change at the same address
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request).then(response => {
        if (response.ok || response.type === 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
        }
        return response;
      }))
    );
    return;
  }

  // --- Question papers from /api/papers: network first, saved copy offline ---
  // The saved copy is what lets a student study offline. It is removed when they sign out.
  if (url.pathname.startsWith('/api/papers')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // --- Old direct data files (only used when testing on your own computer) ---
  if (url.pathname.includes('/data/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // --- Pages: network first, the saved index.html offline ---
  const isNavigation = request.mode === 'navigate';
  const hasExtension = /\.[a-z0-9]+$/i.test(url.pathname);
  if (isNavigation && !hasExtension) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match('/index.html').then(r => r || caches.match('/')))
    );
    return;
  }

  // --- Your own files (CSS, JS, images): network first ---
  event.respondWith(networkFirst(request));
});