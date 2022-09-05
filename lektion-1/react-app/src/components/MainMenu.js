// rafce

import React from 'react'
import "../css/MainMenu.css";
import logo from "../images/logotype.svg"

const MainMenu = () => {
  return (
    <div className="main-menu">
        <div className="container">
            <div className="brand">
                <a href="index.html">
                    <img src={logo} alt="Kenkata Webshop" />
                </a>
            </div>
            <div className="search">
                <form id="searchboxForm">
                    <input id="query" type="text" placeholder="Search products..." />
                    <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className="menu-links">
                <a className="menu-link" href="account.html"><i className="fa-regular fa-user me-2"></i> My account</a>
                <a className="menu-link" href="#"><i className="fa-regular fa-heart"></i></a>
                <a className="menu-link" href="#"><i className="fa-regular fa-shuffle"></i></a>
                <a id="cart" className="menu-link" href="#">
                    <span className="badge rounded-pill">99+</span>
                    <i className="fa-regular fa-cart-shopping me-2"></i>
                    <span>€9999.00</span>
                </a>
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
                            <li><a className="dropdown-item" href="#">Computers</a></li>
                            <li><a className="dropdown-item" href="#">TV & Displays</a></li>
                        </ul>
                    </div>                  
                </div>
                <div className="special-offer">
                    <button className="btn btn-theme">SPECIAL OFFER</button>
                </div>
            </div>
        </nav>
    </div>    
  )
}

export default MainMenu