import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Comp/Home';
import Create from './Comp/Create';
import Delete from './Comp/Delete';
import Update from './Comp/Update';



 function App() {
    const [record,setRecord]  = useState([
      {
        id: 1,
        name:"fenil"
      },
      {
        id:2,
        name:"utsav"
      },

    ])

  return (
    <div>

    <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/create"}>Create</Link>
        <Link to={"/delete"}>Delete</Link>
        <Link to={"/update"}>Update</Link>
        <Routes>
            <Route path='/' element={<Home record={record} />}></Route>
            <Route path='/create' element={<Create record={record} setRecord={setRecord}/>}></Route>
            <Route path='/delete' element={<Delete record={record} setRecord={setRecord}/>}></Route>
            <Route path='/update' element={<Update record={record} setRecord={setRecord}/>}></Route>
        </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App
