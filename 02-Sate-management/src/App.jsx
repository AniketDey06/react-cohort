import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { data } from 'autoprefixer'


function App() {
  // const [count, setCount] = useState(0)
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

 



  // let a = useRef(0)

  // useEffect(() => {
  //   a.current = a.current + 1
  //   console.log(`fgnfjngvjfnv${a.current}`);

  // })

  // const [showBtn, setshowBtn] = useState(false)

  // const [todos, setTodos] = useState([
  //   {
  //     title: "todo 1",
  //     desc: "desc 1",
  //   },
  //   {
  //     title: "todo 2",
  //     desc: "desc 2",
  //   },
  //   {
  //     title: "todo 3",
  //     desc: "desc 3",
  //   },
  // ])

  // const Todo = ({ todo }) => {

  //   return (
  //     <>
  //       <div className='m-4 border border-1 border-purple-400'>
  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.desc}</div>
  //       </div>
  //     </>
  //   )
  // }

  // const [name, setName] = useState("")
  const [from, setFrom] = useState({name: "", phone: ""})

  const handlemouse = () => {
    // alert("mouse in")
    const [color, setColor] = useState()
  }

  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count>=5) return
    setCount(count + 1)
  }

  const subValue = () => {
    if(count<= -5) return
    setCount(count-1)
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setFrom({...from, [e.target.name]:e.target.value})

  }

  return (
    <>
      <div>{count}</div>
      <button onClick={addValue}>++ {count}</button>
      <button onClick={subValue}>-- {count}</button>
      {/* <div className='div' onMouseOver={handlemouse}>Click</div> */}
      {/* <input type="text" value={name} onChange={handleChange}/> */}
      {/* <input type="text" name="name" value={from.name} onChange={handleChange}/>
      <input type="text" name="password" value={from.password} onChange={handleChange}/> */}


      {/* {showBtn && <button onClick={() => { setCount(count + 1) }}>Click</button>}
      <Navbar color={"navy" + "blue"} />
      <div>This Count is : {count}</div> */}

      {/* <button onClick={() => { setCount(count + 1) }}>Click</button> */}
      {/* <button onClick={() => { setshowBtn(!showBtn) }}>Click</button> */}

      {/* {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />
          return (
            <div className='m-4 border border-1 border-purple-400' key={todo.title}>
              <div className="todo">{todo.title}</div>
              <div className="todo">{todo.desc}</div>
            </div>
          )
        }
      )} */}


    </>
  )
}

export default App
