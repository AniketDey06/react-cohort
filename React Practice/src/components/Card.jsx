import React from 'react'

const Card = ({ uName, age, skills, img }) => {
    return (
        <div className='bg-zinc-600 px-5 py-2 rounded text-cente flex flex-col items-center justify-center'>
            <img className='h-32 w-32 rounded-full' src={img}alt="https://randomuser.me/api/portraits/men/1.jpg" />
            <h1 className='text-lg'>User Name: {uName}</h1>
            <p>Age: {age}</p>
            <p>Skills: {skills}</p>
        </div>
    )
}

export default Card
