// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY1AMutEKCUKwi8rcgldJIrgn3LJGfDPo",
  authDomain: "jupeb-question-bank.firebaseapp.com",
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