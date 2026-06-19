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