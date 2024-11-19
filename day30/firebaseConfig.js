// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import {getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd2oVCSkb0EbuYEKC-deaBNtiARRt5geo",
  authDomain: "react3-b522f.firebaseapp.com",
  projectId: "react3-b522f",
  storageBucket: "react3-b522f.appspot.com",
  messagingSenderId: "510275131275",
  appId: "1:510275131275:web:e7fc8b6fda572b62af018e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider;

export {auth,firestore,provider}