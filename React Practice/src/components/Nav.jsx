import React from 'react'

const Nav = () => {
  return (
    <nav className='text-white w-full h-15 flex items-center justify-around bg-emerald-900'>
      <h1 className='text-4xl'>Aniket</h1>
      <div className='flex gap-3 items-center'>
        <a className='text-lg' href="">Contact</a>
        <a className='text-lg' href="">About</a>
        <a className='text-lg' href="">Blog</a>
        <a className='text-lg' href="">Skills</a>
      </div>
    </nav>
  )
}

export default Nav
