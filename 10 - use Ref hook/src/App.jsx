import { useState, useEffect } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './Timer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let btnRef = useRef()

  // function handleClick() {
  //   val.current = val.current + 1
  //   console.log('Val is - ', val.current);
  //   setCount(count + 1)
  // }

  // function hendleChangeColor(){
  //   btnRef.current.style.backgroundColor = "red"
  // }

  // useEffect(() => {
  //   console.log("rendered");
  // })

  return (
    <>
      <Timer/>
      {/* <button ref={btnRef} onClick={handleClick}>
        Increment
      </button>
      <br />
      <button  onClick={hendleChangeColor}>
        CH Color
      </button>
      <div>
        Count: {count}
      </div> */}
    </>
  )
}

export default App
