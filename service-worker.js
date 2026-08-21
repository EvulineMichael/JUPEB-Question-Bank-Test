const CACHE_NAME = 'jupeb-qb-v8'; // ← Bump to v8

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/auth.js',
  '/manifest.json'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
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

// Fetch
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Data JSON files — Stale-While-Revalidate (fast + fresh)
  if (url.pathname.includes('/data/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        const networkFetch = fetch(event.request).then(response => {
          const clone = response.clone();
          cache.put(event.request, clone);
          return response;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }
  
  // Your own files (HTML, CSS, JS) — Network first, cache fallback
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  // External CDN — Cache first
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => cachedResponse || fetch(event.request))
  );
});