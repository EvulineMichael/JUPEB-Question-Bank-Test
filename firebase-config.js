// ===== SIGN-IN THROUGH THE SITE'S OWN ADDRESS =====
// Phones often lose the Google sign-in when it runs on a different address
// (jupeb-question-bank.firebaseapp.com). vercel.json forwards /__/auth/ on this site to
// Firebase, so sign-in can run on jupebijmbprep.com itself and the phone can use the
// full-page sign-in, which is far more reliable there.
// Before switching this to true, add these to Google Cloud Console → APIs & Services →
// Credentials → the "Web client (auto created by Google Service)" → Authorized redirect URIs:
//   https://jupebijmbprep.com/__/auth/handler
//   https://test.jupebijmbprep.com/__/auth/handler
// (and make sure both domains are in Firebase → Authentication → Settings → Authorized domains).
const USE_SITE_AUTH_DOMAIN = false;
const SITE_AUTH_HOSTS = ['jupebijmbprep.com', 'www.jupebijmbprep.com', 'test.jupebijmbprep.com'];
const SITE_HANDLES_AUTH = USE_SITE_AUTH_DOMAIN && SITE_AUTH_HOSTS.includes(location.hostname);

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY1AMutEKCUKwi8rcgldJIrgn3LJGfDPo",
  authDomain: SITE_HANDLES_AUTH ? location.hostname : "jupeb-question-bank.firebaseapp.com",
  projectId: "jupeb-question-bank",
  storageBucket: "jupeb-question-bank.firebasestorage.app",
  messagingSenderId: "746059285176",
  appId: "1:746059285176:web:7bd7410ccb20f6e5f36a4d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Keep a copy of the student's own Firestore data on the device, so the app can
// open offline. This has to run before anything else uses Firestore.
db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
  // 'failed-precondition': open in another tab that can't share; 'unimplemented':
  // this browser can't do it. Either way the site still works online.
  console.warn('Offline storage not available:', err.code);
});