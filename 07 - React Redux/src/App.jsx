import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(reset())
  }

  function handleIncByAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <input
        type="number"
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleIncByAmountClick}>Inc by Amount</button>
    </>
  )
}

export default App
