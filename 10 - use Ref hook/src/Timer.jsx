import React, { useState } from 'react'
import { useRef } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0)
    let timeRef = useRef(null)

    function handleStart() {
        timeRef.current = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
    }
    function handleStop() {
        clearInterval(timeRef.current)
        timeRef.current = null
    }
    function handleReset() {
        handleStop();
        setTime(0)
    }
    return (
        <div>
            <h1>StopWatch: {time}</h1>
            <br />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Timer
