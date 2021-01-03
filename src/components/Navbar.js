import React from 'react'

const Navbar = ()=>{

    return(
        <nav className="navbar">
            <div className="container1 py-1 navbar-content">
                <a href="home.html" className="logo">
                    ELMIR
                </a>
                <ul className="nav-lists">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar