import React from 'react';
import "../css/TopMenu.css";

const TopMenu = () => {
  return (
    <div class="top-menu">
        <div class="container">
            <div class="site-settings">
                <div class="dropdown dropdown-theme me-3">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span id="selected-language">ENG</span><i class="fa-solid fa-chevron-down ms-3"></i>
                    </button>
                    <ul id="languages" class="dropdown-menu dropdown-theme">
                        <li><a class="dropdown-item" href="#">ENG</a></li>
                        <li><a class="dropdown-item" href="#">SWE</a></li>
                    </ul>
                </div>
                <div class="dropdown dropdown-theme me-3">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span id="selected-currency">EUR</span><i class="fa-solid fa-chevron-down ms-3"></i>
                    </button>
                    <ul id="currencies" class="dropdown-menu dropdown-theme">
                        <li><a class="dropdown-item" href="#">EUR</a></li>
                        <li><a class="dropdown-item" href="#">USD</a></li>
                        <li><a class="dropdown-item" href="#">SEK</a></li>
                    </ul>
                </div>
            </div>
            <div class="menu-links">
                <span class="links">
                    <a href="#">Newsletter</a> 
                    <a href="#">Contact us</a> 
                    <a href="#">FAQs</a> 
                </span>
                <span class="social-media">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a> 
                    <a href="#"><i class="fa-brands fa-twitter"></i></a> 
                    <a href="#"><i class="fa-brands fa-instagram"></i></a> 
                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a> 
                    <a href="#"><i class="fa-brands fa-youtube"></i></a> 
                </span>
            </div>
        </div>
    </div>
  )
}

export default TopMenu