import React from 'react'
import { NavLink } from 'react-router-dom';
import './MainMenu.css';
import Logo from '../../images/logotype.svg';

const MainMenu = () => {
  return (
    <div className="main-menu">
        <div className="container">
            <div className="brand">
                <NavLink to="/"><img src={Logo} alt="Kenkata Webshop" /></NavLink>
            </div>
            <div className="search">
                <form id="searchboxForm">
                    <input id="query" type="text" placeholder="Search products..." />
                    <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className="menu-links">
                <NavLink className="menu-link" to="/account"><i className="fa-regular fa-user me-2"></i> My account</NavLink>
                <NavLink className="menu-link" to="/wishlist"><i className="fa-regular fa-heart"></i></NavLink>
                <NavLink className="menu-link" to="/compare"><i className="fa-regular fa-shuffle"></i></NavLink>
                <div id="cart" className="menu-link" >
                    <span className="badge rounded-pill">99+</span>
                    <i className="fa-regular fa-cart-shopping me-2"></i>
                    <span>€9999.00</span>
                </div>
            </div>
        </div>
        <nav>
            <div className="container">
                <div className="browse-categories">
                    <div className="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>
                                <i className="fa-regular fa-bars me-3"></i> Browse Categories 
                            </span>
                            <i className="fa-regular fa-chevron-down ms-4"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/products/category/computers" className="dropdown-item" href="#">Computers</NavLink></li>
                            <li><NavLink to="/products/category/tv-and-displays" className="dropdown-item" href="#">TV & Displays</NavLink></li>
                        </ul>
                    </div>                  
                </div>
                <div className="special-offer">
                    <NavLink to="/special-offer" className="btn btn-theme">SPECIAL OFFER</NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default MainMenu