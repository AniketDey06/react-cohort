import { useState, useEffect } from "react"
import { Counter } from "./Order";
import { AllBooksList } from "./AllBooks";

export function App(){
    const [msg, setMsg] = useState(1);

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
            .then((res) => res.json())
            .then((data) => setMsg(data.data.content))
            .catch(() => setMsg("no quote found"));
    }, [])

    // setMsg(prev => prev + 1)

    return (
        <div>
            <h1>Welcome to react</h1>
            <p>tring vite from scretch</p>
            <h2>{msg}</h2>
            <Counter/>
            <AllBooksList />
        </div>
    )
}
