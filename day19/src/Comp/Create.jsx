import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create( {record, setRecord}) {
    const [name, setName] =useState("");
    const navigate = useNavigate();
    const headleSubmit = () =>{
        setRecord([...record,{id:record.length +1, name : name}])
        navigate("/")
    }
  return (
    <div>

        <h1>Create</h1>
        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
        <button onClick={headleSubmit}>submit</button>
    </div>
  )
}

export default Create