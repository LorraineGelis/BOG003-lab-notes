// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLwQ0Vlx2unMH4FATznb4ZUxzWAKBvITc",
  authDomain: "labnotes-94a5f.firebaseapp.com",
  projectId: "labnotes-94a5f",
  storageBucket: "labnotes-94a5f.appspot.com",
  messagingSenderId: "481074516659",
  appId: "1:481074516659:web:0707d23db9c3d2941b96c6",
  measurementId: "G-154T6T5RKR"
};

initializeApp(firebaseConfig);

// Initialize Firebase
 
export const auth = getAuth();
export const db = getFirestore();

export default firebaseConfig