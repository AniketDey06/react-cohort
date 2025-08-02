import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { Nav, Footer, Card } from './components/Index'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const users =
    [
      {
        "UserName": "aniket",
        "Age": 24,
        "Skills": "js",
        "Image": "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        "UserName": "priya",
        "Age": 22,
        "Skills": "python",
        "Image": "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        "UserName": "rahul",
        "Age": 26,
        "Skills": "java",
        "Image": "https://randomuser.me/api/portraits/men/3.jpg"
      },
      {
        "UserName": "sneha",
        "Age": 25,
        "Skills": "react",
        "Image": "https://randomuser.me/api/portraits/men/4.jpg"
      },
      {
        "UserName": "arjun",
        "Age": 28,
        "Skills": "node",
        "Image": "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        "UserName": "meera",
        "Age": 23,
        "Skills": "css",
        "Image": "https://randomuser.me/api/portraits/men/6.jpg"
      },
      {
        "UserName": "vishal",
        "Age": 30,
        "Skills": "c++",
        "Image": "https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        "UserName": "neha",
        "Age": 21,
        "Skills": "html",
        "Image": "https://randomuser.me/api/portraits/men/8.jpg"
      },
      {
        "UserName": "rohan",
        "Age": 27,
        "Skills": "typescript",
        "Image": "https://randomuser.me/api/portraits/men/9.jpg"
      },
      {
        "UserName": "tanya",
        "Age": 29,
        "Skills": "go",
        "Image": "https://randomuser.me/api/portraits/men/10.jpg"
      },
    ]

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response);
    setData(response.data)
  }

  useEffect(() => {
    getData()


  }, [])


  return (
    <>
      <Nav />
      <div className='p-5 flex flex-wrap gap-5 justify-center'>
        {/* <button className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded m-3 active:scale-95 transition' onClick={getData}>Get Data</button> */}
      </div>
      <div className='p-5 flex flex-wrap gap-5 justify-center'>
        {
          data.map((ele, idx) => {
            return <img className='h-50 rounded-lg' key={ele.id} src={ele.download_url} alt="" />
          })
        }
      </div>
      {/* <div className='m-4 flex flex-wrap gap-5 justify-center'>
        {users.map((user) => {
          return <Card uName={user.UserName} age={user.Age} skills={user.Skills} img={user.Image}/>
        })}
        
      </div> */}
      {/* <Footer /> */}
    </>
  )
}

export default App