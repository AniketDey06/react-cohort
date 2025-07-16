import { useState, useMemo, useCallback } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  // useMemo(() => task(input), [input])

  // function task(num){
  //   console.log("inside task");
  //   for (let i = 0; i < 1000000000; i++) {}
  //   return num*2
  // }

  // let val = useMemo(() => task(input), [input])

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <div>
        <ChildComponent buttonName='click me 2' onClick={handleClick} />
      </div>

      {/* <button onClick={() => {setCount(count+1)}}>Increment</button>
      <div> 
        Count: {count}
      </div>

      <input 
        type="number" 
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>{val}</div> */}

    </>
  )
}

export default App
