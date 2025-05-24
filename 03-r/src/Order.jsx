import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0)

    const increseCount = () => {
        setCount(prev => prev + 1)
    }

    return(
        <div>
            <h2>Counter</h2>
            <p>Count is: {count}</p>
            <button onClick={increseCount}>Count++</button>
        </div>
    )
}