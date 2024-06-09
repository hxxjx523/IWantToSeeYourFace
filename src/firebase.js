// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB54kTLFMnE4P9zjY9MMfJAB1MaQmcKKms",
    authDomain: "iwanttoseeyourface-cdff0.firebaseapp.com",
    projectId: "iwanttoseeyourface-cdff0",
    storageBucket: "iwanttoseeyourface-cdff0.appspot.com",
    messagingSenderId: "276564031269",
    appId: "1:276564031269:web:24162947b03a8237ee4ccc"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };