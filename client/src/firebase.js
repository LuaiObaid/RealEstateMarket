// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4vM2P5oCyZMzvfJmxN8cmuVWqIyzyGkg",
  authDomain: "mern-estate-4ec40.firebaseapp.com",
  projectId: "mern-estate-4ec40",
  storageBucket: "mern-estate-4ec40.appspot.com",
  messagingSenderId: "799249734515",
  appId: "1:799249734515:web:98b339f279151b9c474306",
  measurementId: "G-8LBJVJ8Q4G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);