import { useState, useEffect } from "react"

export function App(){
    const [msg, setMsg] = useState("loading");

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
            .then((res) => res.json())
            .then((data) => setMsg(data.data.content))
            .catch(() => setMsg("no quote found"));
    }, [])

    return (
        <div>
            <h1>Welcome to react</h1>
            <p>tring vite from scretch</p>
            <h2>{msg}</h2>
        </div>
    )
}
