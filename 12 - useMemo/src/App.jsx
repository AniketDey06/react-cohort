import { useState, useMemo, useCallback } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState('cool')

  const chWord = useCallback(() => {
    // setWord(count)
    return "another" + count
  }, [])


  return (
    <div>
      <Navbar word={word} chWord={chWord} />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default App
