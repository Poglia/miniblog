import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqcLChpDnOp4GlmphUkVoLPhzBS3ohG5U",
  authDomain: "miniblogpoglia.firebaseapp.com",
  projectId: "miniblogpoglia",
  storageBucket: "miniblogpoglia.appspot.com",
  messagingSenderId: "697261883805",
  appId: "1:697261883805:web:b9138d922274fc7c60ef74",
  measurementId: "G-WP0BK1QYRH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
