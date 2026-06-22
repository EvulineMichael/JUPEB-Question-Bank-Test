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
  try {
    if (user) {
      const email = user.email;

      const docRef = db.collection("authorized_users").doc(email);
      const doc = await docRef.get();

      // existing logic...
    } else {
      document.getElementById('login-screen').style.display = 'block';
      document.getElementById('app-content').style.display = 'none';
    }
  } catch (error) {
    console.error("Auth Error:", error);
    alert("Connection issue. Please refresh and try again.");
  }
});


// Google Sign In
function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isIOS) {
    auth.signInWithRedirect(provider);
  } else {
    auth.signInWithPopup(provider);
  }
}
console.log("Auth State Changed");
console.log("User:", user?.email);
console.log("Checking Firestore...");
console.log("Document exists:", doc.exists);
console.log("Signing out user");
// Sign Out
function signOutUser() {
  auth.signOut();
}