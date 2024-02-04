// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz7C99SwQGjAPrb35i-Rd_cYQdB-N5KAQ",
  authDomain: "ecowand-957b8.firebaseapp.com",
  projectId: "ecowand-957b8",
  storageBucket: "ecowand-957b8.appspot.com",
  messagingSenderId: "223435685818",
  appId: "1:223435685818:web:cbafef1e66400a0687a783",
  measurementId: "G-0T1D915K85"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export{ app, auth }