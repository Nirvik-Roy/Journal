import React from 'react'
import logo from '../Images/Group.png'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className='nav-bar-wrapper'>
        <div className='nav-logo-img'>
            <img src={logo}></img>
        </div>
        <div className='nav-links-wrapper'>
            <NavLink className={'nav-link2'}>Home</NavLink>
            <NavLink className={'nav-link2'}>Features</NavLink>
            <NavLink className={'nav-link2'}>Tutorials</NavLink>
        </div>
        <div className='login-sign-up-wrapper'>
            <button className='nav-sign-up-btn'>Sign Up</button>
            <button className='nav-login-btn'>Login</button>
        </div>
      </div>
    </>
  )
}

export default Header
