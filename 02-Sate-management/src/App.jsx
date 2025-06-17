import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { data } from 'autoprefixer'


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

  const [showBtn, setshowBtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "todo 1",
      desc: "desc 1",
    },
    {
      title: "todo 2",
      desc: "desc 2",
    },
    {
      title: "todo 3",
      desc: "desc 3",
    },
  ])

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


  return (
    <>
      {/* {showBtn && <button onClick={() => { setCount(count + 1) }}>Click</button>}
      <Navbar color={"navy" + "blue"} />
      <div>This Count is : {count}</div> */}

      {/* <button onClick={() => { setCount(count + 1) }}>Click</button> */}
      <button onClick={() => { setshowBtn(!showBtn) }}>Click</button>

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
