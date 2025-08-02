import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'
import Chuser from './chuser'
import FromCom from './FromCom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className='m-4 flex gap-5 justify-center'>
        <Card uName="aniket" age="24" skills="js"/>
        <Card uName="Aniket Dey" age="242" skills="js2"/>
      </div>
      <Footer />
      {/* <Chuser />
      <FromCom/> */}
      {/* <h1 className='text-2xl text-blue-50 font-bold'>{count}</h1>
      <button 
        className='mt-4 text-blue-50 bg-zinc-800 p-3 rounded-lg' 
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Products count={count}/> */}
    </>
  )
}

export default App