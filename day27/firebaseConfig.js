
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZfLXOX2KMoPqmO9j_0cCnUwJQWd_JdWc",
  authDomain: "react2-64c33.firebaseapp.com",
  projectId: "react2-64c33",
  storageBucket: "react2-64c33.appspot.com",
  messagingSenderId: "1047683792405",
  appId: "1:1047683792405:web:0cf5bda811ce620394d81c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const firestore = getFirestore(app);

export {auth,firestore}