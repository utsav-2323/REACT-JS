import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Comp/Home';
import Create from './Comp/Create';
import Delete from './Comp/Delete';
import Update from './Comp/Update';



function App() {
  const [record,setRecord]  = useState([
    {
    id:1,
    name:"utsav",
    password:"12345",
    email:"utsav23@gmail.com"
  },

      {
        id: 2,
        name:"fenil",
        password:"1234",
        email:"fenil90@gmail.com"
      },
      
2
  ])

  return (
    <div className='a-1'>
      <div className='a-2'>
        <div className="a-3">
          <div className="row m-0 p-0 a-4">
          <BrowserRouter>
      <nav>
        <Link className='a-5 c-1' to="/">Home</Link>
        <Link className='a-6 c-1' to="/create">Create</Link>
        <Link className='a-7 c-1' to="/delete">Delete</Link>
        <Link className='a-8 c-1' to="/update">Update</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home record={record} />} />
        <Route path="/create" element={<Create record={record} setRecord={setRecord} />} />
        <Route path="/delete" element={<Delete record={record} setRecord={setRecord} />} />
        <Route path="/update" element={<Update record={record} setRecord={setRecord} />} />
      </Routes>
    </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
