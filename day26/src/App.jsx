import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Compo/SignUp'
import Login from './Compo/Login';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
