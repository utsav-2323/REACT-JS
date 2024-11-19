import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

function SignUp() {

    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");

    const handleSignUp =() =>{
        createUserWithEmailAndPassword(auth,email,pass)
        .then(data=>{
            console.log(data);
        })
    }
  return (
    <div>
        <h1>SignUp</h1>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='password'  onChange={(e) => setPass(e.target.value)} />
        <button onClick={handleSignUp}>sign up</button>
        <Link to="/login">Login</Link>
        

    </div>
  )
}

export default SignUp