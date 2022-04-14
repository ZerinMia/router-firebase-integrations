// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsXG3BxV__YdrE58C7eO-_8WKF0SoJmvQ",
    authDomain: "react-firebase-integrations.firebaseapp.com",
    projectId: "react-firebase-integrations",
    storageBucket: "react-firebase-integrations.appspot.com",
    messagingSenderId: "271949881462",
    appId: "1:271949881462:web:de55e81f6c1df9bb52ff57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;