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

// Guest access check
if (sessionStorage.getItem('jupeb_guest') === 'true') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('dashboard-screen').style.display = 'block';
    document.getElementById('app-content').style.display = 'none';
    document.getElementById('app-sidebar').style.display = 'flex';
    document.body.classList.add('has-sidebar');   // add this line
    document.getElementById('sidebar-toggle').style.display = 'block';
    renderSidebarUser({ name: "Guest User", isPremium: false, photoURL: null });
    
    window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
    window.userExams = ['jupeb'];
    
    if (typeof showDashboard === 'function') showDashboard();
    if (typeof initJUPEBApp === 'function') initJUPEBApp();
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



// Check auth state
auth.onAuthStateChanged(async (user) => {
  if (user) {
    const email = user.email;

       const claimCode = await recordReferralClaim(user);

    // ===== NORMAL AUTHORIZATION CHECK =====
    const docRef = db.collection("authorized_users").doc(email);
    const doc = await docRef.get();

    if (doc.exists) {
      const userData = doc.data();

      // Access is lifetime, so there is no expiry check any more.
      // Which exams this student has paid for (see getUserExams above).
      window.userExams = getUserExams(userData);

      function revealDashboard() {
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

      revealDashboard();

         if (typeof maybeShowWelcome === "function") maybeShowWelcome(user, docRef);

    } else {
      // Not authorized
      document.getElementById('auth-status').innerHTML =
        `<div style="background:#fff3cd;color:#856404;padding:12px;border-radius:8px;margin-bottom:16px;">
          <p style="margin-bottom:4px;">❌ <strong>${email}</strong> is not authorized yet.</p>
          <button onclick="toggleAccessInfo()" style="padding:8px 16px;background:#856404;color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.85rem;">See How to Get Access →</button>
        </div>`;
      auth.signOut();
    }
  } else {
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