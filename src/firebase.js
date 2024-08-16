// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGoOUffy73qoZnsvjohxSG7Ag5cA7qOmM",
  authDomain: "bootcamp-auth-3085f.firebaseapp.com",
  projectId: "bootcamp-auth-3085f",
  storageBucket: "bootcamp-auth-3085f.appspot.com",
  messagingSenderId: "313627397510",
  appId: "1:313627397510:web:e509f9436c2ce45367f007",
  measurementId: "G-0R8VB50ZW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
