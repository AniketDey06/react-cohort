import { useState, useEffect } from "react";

export function AllBooksList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://api.freeapi.app/api/v1/public/books?page=1&limit=20")
            .then((res) => res.json())
            .then((data) => setBooks(data.data.data))
            .catch((err) => setError(err.message))
    }, [])


    return (
        <div>
            <h2>Available Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}><b>{book.volumeInfo.title}</b> </li>
                ))}
            </ul>
        </div>
    )
}