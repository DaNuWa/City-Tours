import React from 'react'
import logo from '../../../src/logo.svg';
import  './Navbar.scss'
const Navbar= ()=> {
    return (

        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
       <img src={logo} alt=""/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Tours</a>
            </li>
          </ul>
         </div>
      </nav>


    )
}

export default Navbar;