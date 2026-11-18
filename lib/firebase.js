// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPbdKs38kHc2zlyEjjLn4W-NYvMz_g-XE",
  authDomain: "sample-d5660.firebaseapp.com",
  projectId: "sample-d5660",
  storageBucket: "sample-d5660.firebasestorage.app",
  messagingSenderId: "728858109091",
  appId: "1:728858109091:web:055620ebfc37d430fd8b16",
  measurementId: "G-0WCDKYHWVL",
};

// Initialize Firebase (prevent duplicate initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Analytics — only runs in the browser (not during SSR)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
