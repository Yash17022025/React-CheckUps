
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {increment, decrement, resetValue, incrementByAmount } from './features/counterSlice';
import { useState } from 'react';


function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value )
  const dispatch =useDispatch();
  function handleIncrementCLick(){
    dispatch(increment());
  }
  function handleDecrementCLick() {
    dispatch(decrement())
  }
  function resetValueClick() {
    dispatch(resetValue())
  }
  function handleAmountUpdate(){
    dispatch(incrementByAmount(amount))
  }

  return (
   <div className='container'>
    <button onClick={handleIncrementCLick}>+</button> 
    <h2>count: {count}</h2>
    <button onClick={handleDecrementCLick}>-</button> 
    <button onClick={resetValueClick}>Reset</button>
    <input 
      type='Number'
      value={amount} 
      placeholder='Enter Amount' 
      onChange = {(e) => setAmount(e.target.amount)}
    />
    <button onClick={handleAmountUpdate}>Inc. by Amount</button>
   </div>
  )
}

export default App
