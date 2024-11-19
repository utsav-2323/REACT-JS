import React from 'react'
import { auth, provider } from '../firebaseConfig'
import { signInWithPopup } from 'firebase/auth'

export default function Login() {

    const handleLogin = async () => {
        await signInWithPopup(auth, provider)
        .then(user => {
            console.log(user);
        })
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleLogin} >Login with Google</button>
    </div>
  )
}
