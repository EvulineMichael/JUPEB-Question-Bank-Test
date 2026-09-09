// Bypass auth on localhost
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  document.getElementById('login-screen').style.display = 'none';
document.getElementById('dashboard-screen').style.display = 'block';
document.getElementById('app-content').style.display = 'none';
if (typeof showDashboard === 'function') {
    showDashboard();
}
  window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
  if (typeof initJUPEBApp === 'function') {
    initJUPEBApp();
  }
}
// Guest access check
if (sessionStorage.getItem('jupeb_guest') === 'true') {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
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
// ===== LOGIN TABS =====
function showLoginTab(tab) {
    const aboutContent = document.getElementById('login-tab-about-content');
    const signinContent = document.getElementById('login-tab-signin-content');
    const aboutBtn = document.getElementById('login-tab-about');
    const signinBtn = document.getElementById('login-tab-signin');
    
    if (tab === 'about') {
        aboutContent.style.display = 'block';
        signinContent.style.display = 'none';
        aboutBtn.style.borderBottom = '3px solid var(--tab-active-bg)';
        aboutBtn.style.color = 'var(--tab-active-bg)';
        signinBtn.style.borderBottom = '3px solid transparent';
        signinBtn.style.color = 'var(--text-secondary)';
    } else {
        aboutContent.style.display = 'none';
        signinContent.style.display = 'block';
        signinBtn.style.borderBottom = '3px solid var(--tab-active-bg)';
        signinBtn.style.color = 'var(--tab-active-bg)';
        aboutBtn.style.borderBottom = '3px solid transparent';
        aboutBtn.style.color = 'var(--text-secondary)';
    }
}
// Check auth state
auth.onAuthStateChanged(async (user) => {
  if (user) {
    const email = user.email;
    
    const docRef = db.collection("authorized_users").doc(email);
    const doc = await docRef.get();
    
    if (doc.exists) {
      const userData = doc.data();
      
      // Check expiry
      if (userData.expiry_date) {
        const expiryDate = new Date(userData.expiry_date);
        const today = new Date();
        if (today > expiryDate) {
          document.getElementById('auth-status').innerHTML = 
            `<div style="background:#fff3cd;color:#856404;padding:12px;border-radius:8px;margin-bottom:16px;">
              <p>⏰ <strong>Access expired</strong></p>
              <p>Your access expired on ${userData.expiry_date}. Please renew.</p>
            </div>`;
          auth.signOut();
          return;
        }
      }
      
      // Save user name
if (user.displayName) {
    localStorage.setItem('jupeb_user_name', user.displayName.split(' ')[0]);
}

// Show dashboard, hide others
showScreen("dashboard-screen", { pushHistory: false });

// Show sidebar
document.getElementById('app-sidebar').style.display = 'flex';

// Populate user
if (user.displayName) {
    renderSidebarUser({ name: user.displayName.split(' ')[0], isPremium: true });
}
// Show dashboard
if (typeof showDashboard === 'function') {
    showDashboard();
}
      window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
      
      if (typeof initJUPEBApp === 'function') {
        initJUPEBApp();
      }
    } else {
      document.getElementById('auth-status').innerHTML = 
  `<div style="background:#fff3cd;color:#856404;padding:12px;border-radius:8px;margin-bottom:16px;">
    <p style="margin-bottom:4px;">❌ <strong>${email}</strong> is not authorized yet.</p>
    <button onclick="toggleAccessInfo()" style="padding:8px 16px;background:#856404;color:white;border:none;border-radius:6px;cursor:pointer;font-size:0.85rem;">See How to Get Access →</button>
  </div>`;
      auth.signOut();
    }
    } else {
    showScreen("login-screen", { pushHistory: false });
  }
});


// Google Sign In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((error) => {
    alert('Login failed: ' + error.message);
  });
}

// ===== INITIALIZE LOGIN TABS =====
document.addEventListener('DOMContentLoaded', function() {
    // Ensure Sign In is default
    showLoginTab('signin');
});

// Sign Out
function signOutUser() {
  auth.signOut();
}

