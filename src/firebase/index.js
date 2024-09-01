// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMtkxXE_v4ngmvh64K-JBVnJKHQ2Pb5Js",
  authDomain: "vin-project-a0bdc.firebaseapp.com",
  projectId: "vin-project-a0bdc",
  storageBucket: "vin-project-a0bdc.appspot.com",
  messagingSenderId: "717490594090",
  appId: "1:717490594090:web:e480d87c1d66b13335be53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
