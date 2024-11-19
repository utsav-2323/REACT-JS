import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sec1 from './Componet/Sec1';
import Main from './Componet/Main';
import Cart from './Componet/Cart';

function App() {

  return (
    <>
      <Sec1/>
      <Main/>
      <Cart/>
    </>
  )
}

export default App
