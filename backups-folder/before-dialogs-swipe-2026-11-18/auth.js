// Bypass auth on localhost
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'block';
  document.getElementById('app-content').style.display = 'none';
  document.getElementById('app-sidebar').style.display = 'flex';
  document.body.classList.add('has-sidebar');   // add this line
  document.getElementById('sidebar-toggle').style.display = '';
document.getElementById('sidebar-overlay').classList.remove('is-open');
  renderSidebarUser({ name: "Student", isPremium: true, photoURL: null });
  
  if (typeof showDashboard === 'function') {
    showDashboard();
  }
  
  window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
  window.userExams = ['jupeb', 'ijmb'];   // test both exams locally
  
  if (typeof initJUPEBApp === 'function') {
    initJUPEBApp();
  }
}

function toggleAccessInfo() {
  const info = document.getElementById('access-info');
  if (info.style.display === 'none') {
    info.style.display = 'block';
  } else {
    info.style.display = 'none';
  }
}

// ===== EXAM ACCESS =====
// A student's record can hold exams: ["jupeb"], ["ijmb"] or ["jupeb", "ijmb"].
// Students added before IJMB existed have no list, so they count as JUPEB only.
function getUserExams(userData) {
  const list = userData && Array.isArray(userData.exams)
    ? userData.exams.filter(e => e === 'jupeb' || e === 'ijmb')
    : [];
  return list.length ? list : ['jupeb'];
}

// true if the signed-in student has paid for this exam ('jupeb' or 'ijmb')
function hasExam(exam) {
  return Array.isArray(window.userExams) && window.userExams.includes(exam);
}

// ===== RETURNING STUDENTS SKIP THE HOME SCREEN =====
// After a successful sign-in, this device remembers who signed in and which exams
// they have. Next time, the dashboard opens straight away (even offline) and access
// is re-checked quietly in the background. Questions themselves only come from
// /api/papers, which checks access on the server, so this is safe.
const ACCESS_KEY = 'qb_access';
function getSavedAccess() {
  try { return JSON.parse(localStorage.getItem(ACCESS_KEY) || 'null'); } catch (e) { return null; }
}
function saveAccess(email, exams) {
  localStorage.setItem(ACCESS_KEY, JSON.stringify({ email: email, exams: exams }));
}
function forgetAccess() {
  localStorage.removeItem(ACCESS_KEY);
}

// Saved question papers belong to the student who downloaded them: remove them on sign-out
function forgetSavedPapers() {
  if (!('caches' in window)) return;
  caches.keys().then(names => names.forEach(name => {
    caches.open(name).then(cache => cache.keys().then(requests => {
      requests.forEach(req => { if (req.url.includes('/api/papers')) cache.delete(req); });
    }));
  })).catch(() => {});
}

const IS_LOCAL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Before Firebase has even answered, a returning student sees their dashboard,
// not the home screen.
if (!IS_LOCAL && getSavedAccess()) {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'block';
  document.getElementById('app-sidebar').style.display = 'flex';
  document.body.classList.add('has-sidebar');
  document.getElementById('sidebar-toggle').style.display = '';
}

function revealDashboard(user) {
  document.body.classList.remove('is-signing-in');
  sessionStorage.removeItem('qb_signing_in');
  const loginEl = document.getElementById('login-screen');
  if (loginEl) loginEl.style.display = 'none';

  showScreen("dashboard-screen", { pushHistory: false });

  if (user.displayName) {
    localStorage.setItem('jupeb_user_name', user.displayName.split(' ')[0]);
  }

  document.getElementById('app-sidebar').style.display = 'flex';
  document.body.classList.add('has-sidebar');
  document.getElementById('sidebar-toggle').style.display = '';
  document.getElementById('sidebar-overlay').style.display = '';

  if (user.displayName) {
    renderSidebarUser({
      name: user.displayName.split(' ')[0],
      isPremium: true,
      photoURL: user.photoURL || null
    });
  }

  if (typeof showDashboard === 'function') showDashboard();
  window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
  if (typeof initJUPEBApp === 'function') initJUPEBApp();
  if (typeof runRouteInit === 'function') runRouteInit();
}

function showNotAuthorized(email) {
  showAuthMessage('warn',
    `<strong>${escapeAuthText(email)}</strong> doesn't have access yet. If you've paid, send your receipt and this Gmail to us on WhatsApp and we'll activate it.`,
    `<button type="button" class="auth-msg-btn" onclick="document.getElementById('lp-pricing')?.scrollIntoView({behavior:'smooth'}); if (document.getElementById('access-info').style.display === 'none') toggleAccessInfo();">How to get access</button>`);
  forgetAccess();
  auth.signOut();
}

// For a returning student: re-check access without making them wait
async function recheckAccess(user, docRef) {
  if (navigator.onLine) {
    try { await recordReferralClaim(user); } catch (e) { /* tried again at the next online visit */ }
  }
  try {
    const doc = await docRef.get();   // from the server when online, from the saved copy when offline
    if (!doc.exists) {
      if (doc.metadata && doc.metadata.fromCache) return;   // offline with nothing saved: keep going
      showNotAuthorized(user.email);                          // access was removed
      return;
    }
    const exams = getUserExams(doc.data());
    saveAccess(user.email, exams);
    if (exams.join() !== (window.userExams || []).join()) {
      window.userExams = exams;                               // e.g. IJMB was just unlocked
      if (typeof renderExamSwitch === 'function') renderExamSwitch();
    }
  } catch (err) {
    // offline or a network problem: keep using the access saved on this device
  }
}

// Check auth state
auth.onAuthStateChanged(async (user) => {
  if (user) {
    const email = user.email;
    const docRef = db.collection("authorized_users").doc(email);
    const saved = getSavedAccess();

    // Returning student on this device: open now, check in the background
    if (saved && saved.email === email) {
      window.userExams = getUserExams({ exams: saved.exams });
      revealDashboard(user);
      if (typeof maybeShowWelcome === "function") maybeShowWelcome(user, docRef);
      recheckAccess(user, docRef);
      return;
    }

    // First sign-in on this device: check access before opening (needs internet)
    showAuthMessage('info', 'Checking your access…');
    try { await recordReferralClaim(user); } catch (e) { /* tried again next time; never block sign-in */ }

    let doc;
    try {
      doc = await docRef.get();
    } catch (err) {
      showAuthMessage('error', "We couldn't check your access. Check your internet connection and sign in again.");
      auth.signOut();
      return;
    }

    if (doc.exists) {
      clearAuthMessage();
      // Access is lifetime, so there is no expiry check any more.
      window.userExams = getUserExams(doc.data());
      saveAccess(email, window.userExams);
      revealDashboard(user);
      if (typeof maybeShowWelcome === "function") maybeShowWelcome(user, docRef);
    } else {
      showNotAuthorized(email);
    }
  } else {
    if (!sessionStorage.getItem(REDIRECT_FLAG)) setSigningIn(false);
    forgetAccess();
    forgetSavedPapers();
    showScreen("login-screen", { pushHistory: false });
    document.getElementById('app-sidebar').style.display = 'none';
    document.body.classList.remove('has-sidebar');
    document.getElementById('sidebar-toggle').style.display = 'none';
    document.getElementById('sidebar-overlay').classList.remove('is-open');
  }
});


// ===== GOOGLE SIGN-IN =====
// Desktop: a pop-up window. Phones: a full-page sign-in when the site handles sign-in on
// its own address (SITE_HANDLES_AUTH in firebase-config.js), because phones often lose a
// pop-up's result; otherwise a pop-up, with clear messages if it fails.
// In-app browsers (WhatsApp, Instagram, Facebook…) are blocked by Google, so the student
// is shown how to open the site in Chrome or Safari instead.
const REDIRECT_FLAG = 'qb_signing_in';
const UA = navigator.userAgent || '';
const IS_ANDROID = /Android/i.test(UA);
const IS_IOS = /iPhone|iPad|iPod/i.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
const IS_MOBILE = IS_ANDROID || IS_IOS;
const IN_APP_BROWSER = (() => {
  if (/FBAN|FBAV|FB_IAB|Instagram|WhatsApp|Snapchat|TikTok|musical_ly|Line\/|Twitter|LinkedInApp/i.test(UA)) return true;
  if (IS_ANDROID && /; wv\)/.test(UA)) return true;                       // Android WebView
  if (IS_IOS && !/Safari\//.test(UA) && /AppleWebKit/.test(UA)) return true; // iOS WebView
  return false;
})();

function escapeAuthText(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// The message box above the sign-in buttons (#auth-status on the home screen)
function showAuthMessage(kind, html, actionsHtml = '') {
  const box = document.getElementById('auth-status');
  if (!box) return;
  box.innerHTML = `
    <div class="auth-msg auth-msg--${kind}" role="${kind === 'error' || kind === 'warn' ? 'alert' : 'status'}">
      ${kind === 'info' ? '<span class="auth-spinner" aria-hidden="true"></span>' : ''}
      <div class="auth-msg-body"><p>${html}</p>${actionsHtml ? `<div class="auth-msg-actions">${actionsHtml}</div>` : ''}</div>
    </div>`;
  if (kind !== 'info') box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function clearAuthMessage() {
  const box = document.getElementById('auth-status');
  if (box) box.innerHTML = '';
}
function setSigningIn(on) {
  document.body.classList.toggle('is-signing-in', !!on);
  if (on) showAuthMessage('info', 'Signing you in…');
  else {
    sessionStorage.removeItem(REDIRECT_FLAG);
    const box = document.getElementById('auth-status');
    if (box && box.querySelector('.auth-msg--info')) clearAuthMessage();
  }
}

function showInAppBrowserHelp() {
  const url = location.href.split('#')[0];
  const chromeLink = IS_ANDROID
    ? `<a class="auth-msg-btn" href="intent://${escapeAuthText(url.replace(/^https?:\/\//, ''))}#Intent;scheme=https;package=com.android.chrome;end">Open in Chrome</a>`
    : '';
  showAuthMessage('warn',
    `You're in ${/WhatsApp/i.test(UA) ? "WhatsApp's" : /Instagram/i.test(UA) ? "Instagram's" : /FBAN|FBAV|FB_IAB/i.test(UA) ? "Facebook's" : "an app's"} built-in browser, and Google doesn't allow sign-in here. ` +
    (IS_IOS ? 'Tap the <strong>•••</strong> or share button and choose <strong>Open in Safari</strong>, then sign in.'
            : 'Tap <strong>⋮</strong> and choose <strong>Open in Chrome</strong> (or your usual browser), then sign in.'),
    `${chromeLink}<button type="button" class="auth-msg-btn auth-msg-btn--ghost" onclick="copySiteLink(this)">Copy link</button>`);
}
function copySiteLink(btn) {
  const url = location.href.split('#')[0];
  const done = () => { btn.textContent = 'Link copied'; };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done).catch(() => prompt('Copy this link:', url));
  else prompt('Copy this link:', url);
}

function handleSignInError(error) {
  setSigningIn(false);
  const code = (error && error.code) || '';
  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request' || code === 'auth/user-cancelled') return;
  if (code === 'auth/network-request-failed') {
    showAuthMessage('error', "No internet connection. Check your data or Wi-Fi and try again.");
  } else if (code === 'auth/popup-blocked') {
    showAuthMessage('error', "Your browser blocked the Google sign-in window. Allow pop-ups for this site, or open it in Chrome or Safari, and try again.");
  } else if (code === 'auth/web-storage-unsupported' || code === 'auth/operation-not-supported-in-this-environment') {
    showAuthMessage('error', "This browser is blocking sign-in. Open the site in Chrome or Safari (not private mode) and try again.");
  } else if (code === 'auth/unauthorized-domain') {
    showAuthMessage('error', "Sign-in isn't set up for this web address yet. Please message us on WhatsApp.");
  } else {
    showAuthMessage('error', `Sign-in didn't finish. Please try again.${code ? ` <small>(${escapeAuthText(code)})</small>` : ''}`);
  }
  console.error('Sign-in error:', error);
}

function signInWithGoogle() {
  if (IN_APP_BROWSER) { showInAppBrowserHelp(); return; }
  if (document.body.classList.contains('is-signing-in')) return;   // already on its way
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const canRedirect = typeof SITE_HANDLES_AUTH !== 'undefined' && SITE_HANDLES_AUTH;
  setSigningIn(true);

  if (IS_MOBILE && canRedirect) {
    sessionStorage.setItem(REDIRECT_FLAG, '1');
    auth.signInWithRedirect(provider).catch(handleSignInError);
    return;
  }
  auth.signInWithPopup(provider).catch((error) => {
    if (error && error.code === 'auth/popup-blocked' && canRedirect) {
      sessionStorage.setItem(REDIRECT_FLAG, '1');
      return auth.signInWithRedirect(provider).catch(handleSignInError);
    }
    handleSignInError(error);
  });
}

// Coming back from a full-page sign-in: say so while Firebase finishes
if (sessionStorage.getItem(REDIRECT_FLAG)) {
  document.body.classList.add('is-signing-in');
  showAuthMessage('info', 'Finishing sign-in…');
}
auth.getRedirectResult().then((result) => {
  if (result && result.user) console.log('Redirect sign-in successful:', result.user.email);
  else if (sessionStorage.getItem(REDIRECT_FLAG)) setSigningIn(false);   // came back without signing in
  sessionStorage.removeItem(REDIRECT_FLAG);
}).catch((error) => {
  sessionStorage.removeItem(REDIRECT_FLAG);
  handleSignInError(error);
});

// Sign Out
function signOutUser() {
  auth.signOut();
}