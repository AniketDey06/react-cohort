import React, { memo } from 'react'

const Navbar = ({ word, chWord }) => {
    console.log("Navbar Rendered");

    return (
        <div>
            i am a {word} Navbar
            <button onClick={() => chWord()}>Click 2</button>
        </div>
    )
}

export default memo(Navbar)
