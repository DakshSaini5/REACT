import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'

const Navbar = () => {
  return (
    <div>
        <ul> 
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? "active-link" : "") }> 
                Home 
                </NavLink> 
            </li>
            <li>
                <NavLink to='/about'  className={({isActive}) => (isActive ? "active-link" : "")} >
                 About
                </NavLink> 
            </li>
         </ul>
    </div>
  )
}

export default Navbar