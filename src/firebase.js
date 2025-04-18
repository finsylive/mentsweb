// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTXuTUyy1P809-cxez8veNjvXNWtDak5Q",
  authDomain: "ments-web-994dd.firebaseapp.com",
  projectId: "ments-web-994dd",
  storageBucket: "ments-web-994dd.firebasestorage.app",
  messagingSenderId: "712478577069",
  appId: "1:712478577069:web:a50debb8cff1ae9ef7d124",
  measurementId: "G-MQ3K1YYLHV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
