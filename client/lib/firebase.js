
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqtxtk61uw3kTk5aWrDctiE6QpEdeTIA0",
  authDomain: "autumnleaf-studio.firebaseapp.com",
  projectId: "autumnleaf-studio",
  storageBucket: "autumnleaf-studio.firebasestorage.app",
  messagingSenderId: "245988160776",
  appId: "1:245988160776:web:bd50dd2a8abadc71dae8bd",
  measurementId: "G-2H2D626FFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);