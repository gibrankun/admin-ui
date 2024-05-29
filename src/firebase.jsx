// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-141aa.firebaseapp.com",
  projectId: "store-tutorial-141aa",
  storageBucket: "store-tutorial-141aa.appspot.com",
  messagingSenderId: "278313183893",
  appId: "1:278313183893:web:3e2c78425e2876d3f1099c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();