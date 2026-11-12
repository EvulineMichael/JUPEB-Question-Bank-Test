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
  document.getElementById('auth-status').innerHTML =
    `<div style="background:#fff3cd;color:#856404;padding:12px;border-radius:8px;margin-bottom:16px;">
      <p style="margin-bottom:4px;">❌ <strong>${email}</strong> is not authorized yet.</p>
      <button onclick="toggleAccessInfo()" style="padding:8px 16px;background:#856404;color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.85rem;">See How to Get Access →</button>
    </div>`;
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
    await recordReferralClaim(user);

    let doc;
    try {
      doc = await docRef.get();
    } catch (err) {
      document.getElementById('auth-status').innerHTML =
        `<div style="background:#fff3cd;color:#856404;padding:12px;border-radius:8px;margin-bottom:16px;">
          <p>We couldn't check your access. Please check your internet connection and sign in again.</p>
        </div>`;
      auth.signOut();
      return;
    }

    if (doc.exists) {
      // Access is lifetime, so there is no expiry check any more.
      window.userExams = getUserExams(doc.data());
      saveAccess(email, window.userExams);
      revealDashboard(user);
      if (typeof maybeShowWelcome === "function") maybeShowWelcome(user, docRef);
    } else {
      showNotAuthorized(email);
    }
  } else {
    forgetAccess();
    forgetSavedPapers();
    showScreen("login-screen", { pushHistory: false });
    document.getElementById('app-sidebar').style.display = 'none';
    document.body.classList.remove('has-sidebar');
    document.getElementById('sidebar-toggle').style.display = 'none';
    document.getElementById('sidebar-overlay').classList.remove('is-open');
  }
});


// Google Sign In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((error) => {
    alert('Login failed: ' + error.message);
  });
}

// Handle redirect result
auth.getRedirectResult().then((result) => {
  if (result.user) {
    console.log('Redirect sign-in successful:', result.user.email);
  }
}).catch((error) => {
  console.error('Redirect sign-in error:', error);
});



// Sign Out
function signOutUser() {
  auth.signOut();
}