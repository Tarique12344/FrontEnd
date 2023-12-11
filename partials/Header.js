import React, { Component } from 'react'
import '../../Styles/HomePage.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router-dom'
import '../../Styles/header.css'
import smallplane from '../../img/smallPlane.png'


 class Header extends Component {
  render() {
    return (
  
    <nav className="navbar navbar-expand-lg navbar-text ">
        <div className="container">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <img src={smallplane} className='logo' alt=''/>
            <h1 className="header" id="homeheader">Welcome to Cincinnati World Tour</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className=" header"><Link className="nav-link " aria-current="page"  to='/'>Home</Link></li>
                    <li className=" header"><Link className="nav-link"  to="/about">About</Link></li>
                    <li className=" header"><Link className="nav-link"  to="/booking">Booking</Link></li>
                    <li className=" header"><Link className="nav-link"  to="/attractions">Attractions</Link></li>
                    <li className=" header"><Link className="nav-link" to="/addattractions"> Add Attractions</Link></li>
                    <li className=" header"><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>
               
            </div>
        </div>
    </nav>
    
    )
  }
}

export default Header