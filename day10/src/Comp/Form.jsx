import React from 'react'
import './Form.css'
import { useState } from 'react'

function Form() {
  const [Name,setName] = useState('');
  const [Email,setEmail] = useState('');
  const [Pass,setPass] = useState('');
  const handleClick = (e)=>{
    e.preventDefault()
  }
  return (
    <form className='main' onSubmit={handleClick}>
    <div className='a'>
        <div className='a-1'>
            <h1>login form</h1>
        </div>
        <div className="a-2">
          <label> Enter any your Name</label>
          <input type="text"placeholder='Enter any your Name' onChange={(el)=>setName(el.target.value)}  />
        </div>
        <div className="a-3">
          <label> Enter any your E-mail</label>
          <input type="text"placeholder='Enter any your E-mail'  onChange={(el)=>setEmail(el.target.value)} />
        </div>
        <div className="a-4">
          <label> Enter any your Password</label>
          <input type="text"placeholder='Enter any your Password' onChange={(el)=>setPass(el.target.value)} />
        </div>
          <div className="a-5">
            <input type="submit"/>
          </div>         
    </div>
    <div className="b">
          <p>{Name}</p>
          <p>{Email}</p>
          <p>{Pass}</p>
          </div>
    </form>
    
  )
}

export default Form