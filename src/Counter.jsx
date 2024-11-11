import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from './redux/counterSlice'
const Counter = () => {
  const [amount,setAmount]=useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const hanldeIncrementAmount = ()=>{
    if(amount){
        //action dispatch
        dispatch(incrementByAmount(+amount))
    }else{
      alert("Please enter an amount...")
    }
  }
  return (
    <>
       <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'80vh'}}>
        <h2 className='head1'>Counter App</h2>
        <div className="container">

            <div className='d-flex justify-content-center'>
              <h1>{count}</h1>
            </div>
            <div>
              <button onClick={()=>dispatch(decrement())} id="btn1">Decrement</button>
              <button onClick={()=>dispatch(reset())} id="btn2">Reset</button>
              <button onClick={()=>dispatch(increment())} id="btn3">Increment</button>
            </div>
            <div className="form-container">
             <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control w-50' style={{marginLeft: '50px'}} placeholder='Enter an amount...'/>
            <button onClick={hanldeIncrementAmount} className="increment-btn">Increment By Amount</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter