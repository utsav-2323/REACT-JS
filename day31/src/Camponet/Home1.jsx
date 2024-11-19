import React from 'react'
import './Home1.css'
import Image from 'react-bootstrap/Image';
import utsav from '../Image/utsav.jpg'

function Home1() {
  return (
    <div className='m-home'>
        <Image className='img1' src={utsav}  />
        <h1>UTSAV BHALODIYA</h1>
        <h6>Web Developer</h6>
    </div>
  )
}

export default Home1