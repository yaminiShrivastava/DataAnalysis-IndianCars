import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    
  return (
    <>

    <nav className="navbar sticky-top navbar-expand-lg bg-dark bg-gradient " alink="red">
        <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/" ><i className="fa-brands fa-typo3 mx-3"/>Cheams</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nvbr">
                <li className="nav-item ">
                    <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Services">Analysis</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact Us</Link>
                </li>
            </ul>    
        </div>
    </nav>

    </>
  )
}

export default Navbar
