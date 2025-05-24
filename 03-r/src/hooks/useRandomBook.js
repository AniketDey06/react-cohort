import { useState, useEffect } from "react";

export function useRandomBook() {
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/books/book/random")
            .then((res) => {
                if (!res.ok) throw new Error("failed to fetch books");
                return res.json()
            })
            .then((data) => {
                console.log(data);
                
                setBook(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message || "something went wrong")
                setLoading(false)
            })
    })

    return{book, loading, error}
}