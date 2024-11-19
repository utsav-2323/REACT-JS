import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConfig';

function Login() {
    const [email, setEmail]= useState("");
    const [pass, setPass]= useState("");


    const handleLogIn =()=>{
        signInWithEmailAndPassword(auth,email,pass)
        .then (data=>{
            console.log(data);
        })
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e) => setPass(e.target.value)} />
        <button onClick={()=>handleLogIn}>Login</button>
        <Link to="/">SignUp</Link>
    </div>
  )
}

export default Login