import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
            <NavLink to="/" className="navbar-brand">React App</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <NavLink to="/settings" className="nav-link navlink"><i class="fa-solid fa-gear"></i></NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
