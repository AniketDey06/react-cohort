import { useState, useEffect, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Login from './components/Login'
import Logout from './components/Logout'
import ChildA from './components/ChildA'
import Home from './components/Home'
import About from './components/About'

const UserContext = createContext()

function App() {
  // const [name, setName] = useState('')
  // const [isLogedin, setisLogedin] = useState(0)

  // const handleClick = () => {
  //   setisLogedin(!isLogedin)
  // }

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   alert("1st render")
  // },[])

  // useEffect(() => {
  //   alert("Count updated")

  //   return() => {
  //     alert("Count remove")
  //   }
  // }, [count])

  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  const [user, setUser] = useState({ name: "Aniket" })


  return (
    <>
      <UserContext.Provider value={user}>

        <ChildA />
      </UserContext.Provider>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>Click</button> */}
      {/* {isLogedin? <Logout click={handleClick}/>: <Login click={handleClick}/>} */}
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
export { UserContext }
