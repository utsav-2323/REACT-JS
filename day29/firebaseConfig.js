// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7EqIngykmfU9D8Yh5nw5aoNM7RC00YQk",
  authDomain: "react4-95d6a.firebaseapp.com",
  projectId: "react4-95d6a",
  storageBucket: "react4-95d6a.appspot.com",
  messagingSenderId: "501686201729",
  appId: "1:501686201729:web:3435c7e82fffe21fc88c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export {auth,provider}