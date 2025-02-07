// Import the functions you need from the SDKs you need
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCotF-EzzhsoOBuQDX23RkPMtbrV8z5B_w",
  authDomain: "car-trade-app-6d70d.firebaseapp.com",
  projectId: "car-trade-app-6d70d",
  storageBucket: "car-trade-app-6d70d.firebasestorage.app",
  messagingSenderId: "171164379349",
  appId: "1:171164379349:web:8ea822cc3206facf019a5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Set persistence to session-only (auto logout when tab is closed)
setPersistence(auth, browserSessionPersistence);

export default auth;
