import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='text-white w-full h-15 flex items-center justify-around bg-emerald-900'>
      <h1 className='text-4xl'>Aniket</h1>
      <div className='flex gap-3 items-center'>
        <Link className='text-lg' to="/">Home</Link>
        <Link className='text-lg' to="/Contact">Contact</Link>
        <Link className='text-lg' to="/About">About</Link>
        <Link className='text-lg' to="/product">Product</Link>
      </div>
    </nav>
  )
}

export default Nav
