import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/CounterSlice';
import './Style.css'

export default function ReduxExp() {
   const data = useSelector((state) =>{
      return state.Counterkey.num
   })
   const dispatch = useDispatch();
  return (
    <div>
        <h1>Redux</h1>
        <h1>{data}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
