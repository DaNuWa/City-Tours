import React from 'react'
import logo from '../../../src/logo.svg';
import  './Navbar.scss'
const Navbar= ()=> {
    return (
        <nav>
            <img src={logo} alt=""/>
            <ul>
                <li><a href="/home" className="nav-link">Home</a></li>
                <li><a href="/"className="nav-link">About Us</a></li>
                <li><a href="/"className="nav-link  active">Tours</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;