import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './feature/CounterSlice';

import './Style.css'

export default function ReduxExp() {
  const [name,setName] = useState("");
  const [sub,setSub] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const record = useSelector((state) =>{
    return state.Counterkey.data
 })


  const handleAdd = () => {
    if (editIndex !== null) {
      dispatch(updateData({ id: editIndex, name:name, subject:sub }));
      setEditIndex(null);
    } else {
      dispatch(addData({ id: Date.now(),name:name, subject: sub }));
    }
    setName("");
    setSub("");
  };
  
   const hadleDelete= (id) =>{
    dispatch(deleteData(id));
   }
   const handeEdit = (id) =>{
    const singleData = record.find((item) => item.id == id);
      setName(singleData.name);
      setSub(singleData.subject);
      setEditIndex(id);
    }
   
  return (
    <div>
        <h1>Redux Crud</h1>
        <input type="text" id='px' className='a' value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
        <input type="text" className='a' value={sub} placeholder='Enter Subject' onChange={(e) => setSub(e.target.value)}/>
        <button onClick={handleAdd} className='ok'>{editIndex ? "Update Data" : "Add Data"}</button>


        {
          record.map((e,i) =>{
            return <ul className='ab' key={i}>
            <li className='a1'>{e.id}</li>
            <li className='a1'>{e.name}</li>
            <li className='a1'>{e.subject}</li>
            <button className='b1' onClick={()=>handeEdit(e.id)}>Edit</button>
            <button className='b1' onClick={()=>hadleDelete(e.id)}>Delete</button>
            </ul>
          })
        }


    </div>
  )
}
