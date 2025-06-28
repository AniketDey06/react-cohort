import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard'>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
