// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTXuTUyy1P809-cxez8veNjvXNWtDak5Q",
  authDomain: "ments-web-994dd.firebaseapp.com",
  projectId: "ments-web-994dd",
  storageBucket: "ments-web-994dd.firebasestorage.app",
  messagingSenderId: "712478577069",
  appId: "1:712478577069:web:a50debb8cff1ae9ef7d124",
  measurementId: "G-MQ3K1YYLHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
