import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGmSOE6OBumlm8VnSKqaidCUfKtUrgERI",
    authDomain: "bicycle-warhouse.firebaseapp.com",
    projectId: "bicycle-warhouse",
    storageBucket: "bicycle-warhouse.appspot.com",
    messagingSenderId: "84121001715",
    appId: "1:84121001715:web:e2e85a1cd4305e39b8a186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;