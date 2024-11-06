// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8dTuMPkM1zRXBMIXbGlOcXW8hl2YQ-N8",
    authDomain: "proyectotecsup-ef51e.firebaseapp.com",
    projectId: "proyectotecsup-ef51e",
    storageBucket: "proyectotecsup-ef51e.firebasestorage.app",
    messagingSenderId: "765518061742",
    appId: "1:765518061742:web:8cb4e69ce85c8584a7cd3f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }