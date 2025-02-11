// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js'

//web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB6r5KXJxTOZX5sulh6SXrTMBNU_p_mDIM",
  authDomain: "music-player-5a4c1.firebaseapp.com",
  projectId: "music-player-5a4c1",
  storageBucket: "music-player-5a4c1.firebasestorage.app",
  messagingSenderId: "643316170930",
  appId: "1:643316170930:web:f3a33b5c28d0207cdec9ab",
  measurementId: "G-NQGBRHYX6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword }