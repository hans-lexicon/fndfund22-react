import React from 'react'
import { NavLink } from 'react-router-dom';
import './TopMenu.css';

const TopMenu = () => {
  return (

    <div className="top-menu">
        <div className="container">
            <div className="site-settings">
                <div className="dropdown dropdown-theme me-3">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span id="selected-language">ENG</span><i className="fa-solid fa-chevron-down ms-3"></i>
                    </button>
                    <ul id="languages" className="dropdown-menu dropdown-theme">
                        <li className="dropdown-item">ENG</li>
                        <li className="dropdown-item">SWE</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-theme me-3">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span id="selected-currency">EUR</span><i className="fa-solid fa-chevron-down ms-3"></i>
                    </button>
                    <ul id="currencies" className="dropdown-menu dropdown-theme">
                        <li className="dropdown-item">EUR</li>
                        <li className="dropdown-item">USD</li>
                        <li className="dropdown-item">SEK</li>
                    </ul>
                </div>
            </div>
            <div className="menu-links">
                <span className="links">
                    <NavLink to="/newsletter">Newsletter</NavLink> 
                    <NavLink to="/contact">Contact us</NavLink> 
                    <NavLink to="/faq">FAQs</NavLink> 
                </span>
                <span className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a> 
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a> 
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a> 
                    <a href="https://pinterest.com" target="_blank"><i className="fa-brands fa-pinterest-p"></i></a> 
                    <a href="https://youtube.com" target="_blank"><i className="fa-brands fa-youtube"></i></a> 
                </span>
            </div>
        </div>
    </div>


  )
}

export default TopMenu