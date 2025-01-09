// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Correct import for authentication SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHQ3XEPeeZWdowjAkOePQOfMDUmkCG-WI",
  authDomain: "netflixgpt-a6612.firebaseapp.com",
  projectId: "netflixgpt-a6612",
  storageBucket: "netflixgpt-a6612.firebasestorage.app",
  messagingSenderId: "655489601142",
  appId: "1:655489601142:web:958a28abc900a5220c5957",
  measurementId: "G-47888NFTFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);  // You can use the exported auth object for authentication operations
