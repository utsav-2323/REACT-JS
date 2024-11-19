import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState("sin")

  return (
    <div className="App">
    
    {
      state == "sin" ?
      <div className="a">
      <div className="a1">
        <h3>Signup From</h3>
      </div>
      <div className="a2">
        <button className='log' onClick={()=>setState("log")}>Login</button>
        <button className='sig'>Signup</button>
      </div>
      <div className="a3">
        <input type="text" placeholder='Enter Email Address' />
        <input type="password" placeholder='Enter Password'/>
        <input type="password" placeholder='Ebter confirm Password'/>
      </div>
      <div className="a4">
        <button>Signup</button>
      </div>
    </div>

    :<div className="b">
      <div className="b1">
        <h3>Login From</h3>
      </div>
      <div className="b2">
      <button className='log'>Login</button>
        <button className='sig' onClick={()=>setState("sin")}>Signup</button>
      </div>
      <div className="b3">
        <input type="text" placeholder='Enter Email Address' />
        <input type="password" placeholder='Enter Password' />
      </div>
      <div className="b4">
        <p>Frogot Password ?</p>
      </div>

      <div className="b5">
        <button>Signup</button>
      </div>
    </div>

        }

    </div>

  );
}

export default App;
