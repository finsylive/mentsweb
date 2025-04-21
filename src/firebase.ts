// src/firebase.ts
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey:    "AIzaSyDTXuTUyy1P809-cxez8veNjvXNWtDak5Q",
  authDomain: "ments-web-994dd.firebaseapp.com",
  projectId:  "ments-web-994dd",
  storageBucket: "ments-web-994dd.firebasestorage.app",
  messagingSenderId: "712478577069",
  appId:     "1:712478577069:web:a50debb8cff1ae9ef7d124",
  measurementId: "G-MQ3K1YYLHV",
};

// Initialize Firebase App
const app: FirebaseApp = initializeApp(firebaseConfig);
console.log("Firebase App Initialized:", app.name);  // should log "[DEFAULT]"

// Initialize Analytics (only in the browser)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
  console.log("Analytics Initialized:", analytics);
}

export { app, analytics };
