// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUDEKR_yQ1ae1igGjlaEc7kutO4EekQ4",
  authDomain: "react1-f8ab8.firebaseapp.com",
  projectId: "react1-f8ab8",
  storageBucket: "react1-f8ab8.appspot.com",
  messagingSenderId: "296253511235",
  appId: "1:296253511235:web:1d1a83a42aef5ef9caa6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};