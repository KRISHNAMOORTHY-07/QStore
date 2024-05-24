// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlnsdEJoLds-N0Z0RSYk8reAsetB6z_sA",
  authDomain: "q-store-3f689.firebaseapp.com",
  projectId: "q-store-3f689",
  storageBucket: "q-store-3f689.appspot.com",
  messagingSenderId: "232983947885",
  appId: "1:232983947885:web:8f2b5b8e0303b9b3392d64",
  measurementId: "G-SK93QV09CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };