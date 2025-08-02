import React, { useState } from 'react'

const Chuser = () => {
    const [flag, setflag] = useState(true)
    const [username, setUsername] = useState("bb")

    const chUsername = () => {
        if (flag) {
            setUsername("aa")
        }else{
            setUsername("bb")
        }
        setflag(!flag)
    }

    return (
        <div className='text-gray-500 font-bold'>
            <h1 >Name: {username}</h1>
            <button
                onClick={chUsername}
                className='bg-zinc-700 p-3 rounded-md'>
                Ch user
            </button>
        </div>
    )
}

export default Chuser
