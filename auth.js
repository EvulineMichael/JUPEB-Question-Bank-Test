// Bypass auth on localhost
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-content').style.display = 'block';
  window.authorizedSubjects = ['chemistry', 'physics', 'maths', 'biology'];
  if (typeof initJUPEBApp === 'function') {
    initJUPEBApp();
  }
} else {
  // Normal auth flow below...
  auth.onAuthStateChanged(async (user) => {
    // ... rest of your existing auth code
  });
}
// Show loading status
document.getElementById('auth-status').innerHTML = 
  '<div style="color:#6c757d;font-size:0.9rem;">🔄 Checking access...</div>';
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
      if (!userData.expiry_date) {
  console.warn(`User ${email} has no expiry_date set. Adding one-year default.`);
  // Optionally auto-set it:
  // await db.collection("authorized_users").doc(email).update({
  //   expiry_date: "June 30, 2027"
  // });
}
      
      // Access granted
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('app-content').style.display = 'block';
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
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('app-content').style.display = 'none';
  }
});

// Handle redirect result (after user returns from Google sign-in)
auth.getRedirectResult().then((result) => {
  if (result.user) {
    // User is signed in. onAuthStateChanged will handle authorization.
    console.log('Redirect sign-in successful:', result.user.email);
  }
}).catch((error) => {
  console.error('Redirect sign-in error:', error);
});


// Google Sign In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // Use redirect for mobile (iPhone/Android), popup for desktop
  if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
    auth.signInWithRedirect(provider)
      .then(() => {
        // Redirect happens; onAuthStateChanged will fire after return
      })
      .catch((error) => {
        alert('Login failed: ' + error.message);
      });
  } else {
    auth.signInWithPopup(provider).catch((error) => {
      alert('Login failed: ' + error.message);
    });
  }
}

// Sign Out
function signOutUser() {
  auth.signOut();
}