// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfC-GjOy26CxHDKQ02E4Gv2DJXJ1n046A",
  authDomain: "proyectofinal-delrio.firebaseapp.com",
  projectId: "proyectofinal-delrio",
  storageBucket: "proyectofinal-delrio.firebasestorage.app",
  messagingSenderId: "458360858657",
  appId: "1:458360858657:web:91a5b17d17c642f3f39b60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
