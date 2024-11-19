import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import './Fech.css';

export default function Fech() {
  
    const[record, setRecord] = useState([])

    useEffect(() => {
        fetchApi();
    },[])

    const fetchApi = async () => {
        let response = await axios.get("https://fakestoreapi.com/products");
        console.log(response);
        setRecord(response.data)
    }
  
    return (
        <>
        <div className='a'>
            <h1 className='a1'>Api-Exp</h1>
        </div>
        <div className='b'>
            <div className="c">
            {
            record ?
            record.map((e,i)=>{
                return <div className='b1' key={i}>
                    <p className='bb1'>{e.title}</p>
                    <p className='bb1'>{e.price}</p>
                    <img src={e.image} className='img' />
                </div>
            })
            : <p>Loading</p>
        }
            </div>
        </div>
        </>
  )
}
