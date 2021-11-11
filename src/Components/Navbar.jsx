import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.jpg';
import './form.css';

function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav ? "nav active" : "nav"}>
            <NavLink to='/' className='logo'>
                <img src={logo} alt=''/>
            </NavLink>
            <input className="menu-btn" type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><NavLink to= '/about'>About</NavLink></li>
                <li><NavLink to= './services'>Services</NavLink></li>
                <li><NavLink to= '/trainers'>Trainers</NavLink></li>
                <li><NavLink to= '/events'>Events</NavLink></li>
                <li><NavLink to= '/contact'>Contact</NavLink></li>
                <li><NavLink to= '/login'>Log In</NavLink></li>
              
                
            </ul>
        </nav>
    )
}

export default Navbar;