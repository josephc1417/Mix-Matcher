import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
            <span className='logo'>MixMaster</span>
            <div className='nav-links'>
                  <NavLink to='/' className='nav-link'>Home</NavLink>
                  <NavLink to='/About' className='nav-link'>About</NavLink>
                  <NavLink to='/Newsletter' className='nav-link'>Newsletter</NavLink>
            </div>
      </div>
    </nav>
  )
}

export default Navbar
