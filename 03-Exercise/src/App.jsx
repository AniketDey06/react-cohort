import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cards, setCards] = useState([])
  const [showbtn, setShowbtn] = useState(false)

  const fetchData = async () => {
    const a = await fetch("https://jsonplaceholder.typicode.com/posts").then(console.log("data fetcheing"))
    const data = await a.json()
    console.log(data);

    setCards(data)
  }

  // useEffect(() => {

  // }, [])

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <button onClick={() => { fetchData(), setShowbtn(!showbtn) }}>
        get data
      </button>
      <div className="container flex flex-wrap gap-4">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card w-98 text-left border-1">
              <h3>{card.id}</h3>
              <h2><b>{card.title}</b></h2>
              <p>{card.body}</p>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default App
