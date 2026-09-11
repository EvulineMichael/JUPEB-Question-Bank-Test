// Bypass auth on localhost
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard-screen').style.display = 'block';
  document.getElementById('app-content').style.display = 'none';
  document.getElementById('app-sidebar').style.display = 'flex';
  document.body.classList.add('has-sidebar');   // add this line
  document.getElementById('sidebar-toggle').style.display = '';
  document.getElementById('sidebar-overlay').style.display = 'none';
  renderSidebarUser({ name: "Student", isPremium: true, photoURL: null });
  
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
    document.getElementById('dashboard-screen').style.display = 'block';
    document.getElementById('app-content').style.display = 'none';
    document.getElementById('app-sidebar').style.display = 'flex';
    document.body.classList.add('has-sidebar');   // add this line
    document.getElementById('sidebar-toggle').style.display = 'block';
    renderSidebarUser({ name: "Guest User", isPremium: false, photoURL: null });
    
    window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
    
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

      // Show dashboard
      showScreen("dashboard-screen", { pushHistory: false });

      // Show sidebar
      // Show sidebar
document.getElementById('app-sidebar').style.display = 'flex';
document.body.classList.add('has-sidebar');   // add this line
document.getElementById('sidebar-toggle').style.display = '';  // ← empty, CSS decides

      // Populate user in sidebar
      if (user.displayName) {
    renderSidebarUser({ 
        name: user.displayName.split(' ')[0], 
        isPremium: true,
        photoURL: user.photoURL || null
    });
}
      
      // Show dashboard content
      if (typeof showDashboard === 'function') {
          showDashboard();
      }
      
      window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
      
      if (typeof initJUPEBApp === 'function') {
        initJUPEBApp();
      }
      
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
    document.body.classList.remove('has-sidebar');   // add this line
    document.getElementById('sidebar-toggle').style.display = 'none';
    document.getElementById('sidebar-overlay').style.display = 'none';
}
});


// Google Sign In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
    auth.signInWithRedirect(provider).catch((error) => {
      alert('Login failed: ' + error.message);
    });
  } else {
    auth.signInWithPopup(provider).catch((error) => {
      alert('Login failed: ' + error.message);
    });
  }
}

// Handle redirect result
auth.getRedirectResult().then((result) => {
  if (result.user) {
    console.log('Redirect sign-in successful:', result.user.email);
  }
}).catch((error) => {
  console.error('Redirect sign-in error:', error);
});

// ===== INITIALIZE LOGIN TABS =====
document.addEventListener('DOMContentLoaded', function() {
    showLoginTab('signin');
});

// Sign Out
function signOutUser() {
  auth.signOut();
}