// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-TYxeb4gd9zCjKMagVcDEweaHHyGymc8",
  authDomain: "cyoracle-4c953.firebaseapp.com",
  projectId: "cyoracle-4c953",
  storageBucket: "cyoracle-4c953.appspot.com",
  messagingSenderId: "637712166774",
  appId: "1:637712166774:web:b9b0578109156c76a61457",
  measurementId: "G-M4XKD3Q6G4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;