// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVLyQKgudVP8JHKdXw7zaeRXXCkG_eNUQ",
    authDomain: "netflixgpt-46b86.firebaseapp.com",
    projectId: "netflixgpt-46b86",
    storageBucket: "netflixgpt-46b86.firebasestorage.app",
    messagingSenderId: "715489921152",
    appId: "1:715489921152:web:8cfd5a84b94f66a50afe65",
    measurementId: "G-Z1TXRYY8RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
