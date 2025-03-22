

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvIWI8FSROdUf0hhFIDpcSChFY4-7PW8c",
  authDomain: "react-cursos-15fa6.firebaseapp.com",
  projectId: "react-cursos-15fa6",
  storageBucket: "react-cursos-15fa6.firebasestorage.app",
  messagingSenderId: "117397975710",
  appId: "1:117397975710:web:c96fadd498309bba3c018f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);