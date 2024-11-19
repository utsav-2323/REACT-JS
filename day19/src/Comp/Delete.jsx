import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Delete({record, setRecord}) {
    const [num, setNum]= useState(null);
    const navigate = useNavigate();
    const handleDelete = () => {
        let data = record.filter((item) => item.id != num);
        setRecord(data);
        navigate("/")
    }
  return (
    <div>
        <h1>Delete</h1>
        <input type="text" placeholder='enter id' onChange={(e) => setNum(e.target.value)} />
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete