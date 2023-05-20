// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd3eSxpCezOXW-IhOr4UWdpHkTWm_wYrM",
    authDomain: "prognonsis-ai.firebaseapp.com",
    projectId: "prognonsis-ai",
    storageBucket: "prognonsis-ai.appspot.com",
    messagingSenderId: "76715407114",
    appId: "1:76715407114:web:b5f7e6e4d31e954db0acf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();