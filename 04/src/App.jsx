import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  const [name, setName] = useState('')
  const [isLogedin, setisLogedin] = useState(0)

  const handleClick = () => {
    setisLogedin(!isLogedin)
  }

  return(
    <>
      {isLogedin? <Logout click={handleClick}/>: <Login click={handleClick}/>}
    </>
  )

  // if (isLogedin) {
  //   return(
  //     <Logout click={handleClick}/>
  //   )
  // }else{
  //   return(
  //     <Login click={handleClick} />
  //   )
  // }
  // return (
  //   <>
  //     {/* <Card title="Card1" name={name} setName={setName} />
  //     <p>from perent: {name}</p>
  //     <Card title="Card2" name={name} setName={setName} />
  //     <p>from perent: {name}</p> */}
  //   </>
  // )
}

export default App
