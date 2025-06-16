import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  // const [color, setColor] = useState(0)

  // // useEffect(() => {
  // //   alert("welcome to the page")
  // // }, [])

  // useEffect(() => {
  //   alert("count has changed")
  //   setColor(color + 1)
  // }, [count])

  // useEffect(() => {
  //   alert("Welcome to my page app.jsx. on first render")

  //   return () => {
  //     alert("component was unmounted")
  //   }
  // }, [])

  let a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1
    console.log(`fgnfjngvjfnv${a.current}`);
    
  })
  


  return (
    <>
      <Navbar color={"navy" + "blue"} />
      <div>This Count is : {count}</div>

      <button onClick={() => { setCount(count + 1) }}>Click</button>



    </>
  )
}

export default App
