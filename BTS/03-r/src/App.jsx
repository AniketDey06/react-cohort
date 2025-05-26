import { useState, useEffect } from "react"
import { Counter } from "./Order";
import { AllBooksList } from "./AllBooks";
import { useRandomBook } from "./hooks/useRandomBook";

export function App(){
    // const {book, loading, error} = useRandomBook()
    const [msg, setMsg] = useState(1);

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
            .then((res) => res.json())
            .then((data) => setMsg(data.data.content))
            .catch(() => setMsg("no quote found"));
    }, [])

    // if(loading) return <h2>Loading...</h2>
    // if(error) return <h2>Error...: {error}</h2>

    return (
        <div>
            <h1>Welcome to react</h1>
            <p>tring vite from scretch</p>
            <h2>{msg}</h2>
            <Counter/>
            <AllBooksList />
            {/* <h3>{book.data.volumeInfo.title}</h3> */}
        </div>
    )
}
