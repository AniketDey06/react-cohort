import React from 'react'

const Card = ({uName, age, skills}) => {
  return (
    <div className='bg-zinc-400 w-60 px-5 py-2 rounded-lg'>
      <h1 className='text-lg'>User Name: {uName}</h1>
      <p>Age: {age}</p>
      <p>Skills: {skills}</p>
    </div>
  )
}

export default Card
