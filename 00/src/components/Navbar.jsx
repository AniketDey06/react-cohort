import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <h1>{props.logTxt}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
