// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr_Tx5r8j9BHLtRfKKQvM0WtsUo0gRDQU",
    authDomain: "perfect-wedding-photography.firebaseapp.com",
    projectId: "perfect-wedding-photography",
    storageBucket: "perfect-wedding-photography.appspot.com",
    messagingSenderId: "588828475428",
    appId: "1:588828475428:web:2fc0d9a68eaaa5f64b58b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;