import React from 'react'
import { useEffect } from 'react'

const Navbar = ({ color }) => {
    // useEffect(() => {
    //     alert("color was changed")
    // }, [color])

    // useEffect(() => {
    //     alert("run on every nav render")
    // })

    // useEffect(() => {
    //     alert("run on first render")
    // }, [])

    // useEffect(() => {
    //     alert("Welcome to my page app.jsx. on first render")

    //     return () => {
    //         alert("component was unmounted")
    //     }
    // }, [])


    return (
        <div>
            it is a navbar of {color} color
        </div>
    )
}

export default Navbar
