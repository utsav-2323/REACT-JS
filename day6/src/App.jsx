import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState("sin")
  const [sinEmail,setsinEmail] = useState("");
  const [sinPass,setsinPass] = useState("");
  const [logEmail,setLogEmail] = useState("");
  const [logPass,setLogPass] = useState("");
  const [arr,setArr] = useState("");
  const handleClick = ()=>{
    let obj = {
      email : sinEmail,
      password : sinPass
    }
    setArr([...arr,obj])
    setsinEmail("")
    setsinPass("")
  }
  const handleLogin = ()=>{
    let a = arr.filter((el)=>{
      if(el.email == logEmail && el.password == logPass){
        return el
      }
    })
    console.log(a)
    if(a.length > 0){
      alert("Login Successfull...")
    }else{
      alert("Cret Email and Password ... ?")
    }
  }
  return (
    <div className="App">
    
    {
      state == "sin" ?
      <div className="a">
      <div className="a1">
        <h3>Signup From</h3>
      </div>
      <div className="a2">
        <button className='log1' onClick={()=>setState("log")}>Login</button>
        <button className='sig'>Signup</button>
      </div>
      <div className="a3">
        <input type="text" placeholder='Enter Email Address' onChange={(el)=>setsinEmail(el.target.value)} />
        <input type="password" placeholder='Enter Password' onChange={(el)=>setsinPass(el.target.value)}/>
        <input type="password" placeholder='Ebter confirm Password'/>
      </div>
      <div className="a4">
        <button onClick={handleClick}>Signup</button>
      </div>
    </div>

    :<div className="b">
      <div className="b1">
        <h3>Login From</h3>
      </div>
      <div className="b2">
      <button className='log'>Login</button>
        <button className='sig1' onClick={()=>setState("sin")}>Signup</button>
      </div>
      <div className="b3">
        <input type="text" placeholder='Enter Email Address' onChange={(el)=>setLogEmail(el.target.value)}/>
        <input type="password" placeholder='Enter Password' onChange={(el)=>setLogPass(el.target.value)}/>
      </div>
      <div className="b4">
        <p>Frogot Password ?</p>
      </div>

      <div className="b5">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>

        }

    </div>

  );
}

export default App;
