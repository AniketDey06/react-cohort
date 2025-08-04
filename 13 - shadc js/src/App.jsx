import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCkilck = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Button</Button>
      </div>
      <Button variant="destructive">Button</Button>
      <Button variant="destructive" onClick={handleCkilck} >Click me {count}</Button>
      <Button variant="outline">Decrise</Button>

    </>
  )
}

export default App
