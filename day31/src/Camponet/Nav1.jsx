import React from 'react'
import './Nav1.css'

function Nav1() {
  return (
    <>
      <div className="m-nav">
        <div className="n1">
          <h1 className='name-tital'>UTSAV</h1>
        </div>
        <div className="n2">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
        </div>
        <div className="n3">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-google"></i>
        </div>
      </div>
      
    </>
  )
}

export default Nav1