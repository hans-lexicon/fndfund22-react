import React from 'react'

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
                        <li><a className="dropdown-item" href="#">ENG</a></li>
                        <li><a className="dropdown-item" href="#">SWE</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-theme me-3">
                    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span id="selected-currency">EUR</span><i className="fa-solid fa-chevron-down ms-3"></i>
                    </button>
                    <ul id="currencies" className="dropdown-menu dropdown-theme">
                        <li><a className="dropdown-item" href="#">EUR</a></li>
                        <li><a className="dropdown-item" href="#">USD</a></li>
                        <li><a className="dropdown-item" href="#">SEK</a></li>
                    </ul>
                </div>
            </div>
            <div className="menu-links">
                <span className="links">
                    <a href="#">Newsletter</a> 
                    <a href="#">Contact us</a> 
                    <a href="#">FAQs</a> 
                </span>
                <span className="social-media">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a> 
                    <a href="#"><i className="fa-brands fa-twitter"></i></a> 
                    <a href="#"><i className="fa-brands fa-instagram"></i></a> 
                    <a href="#"><i className="fa-brands fa-pinterest-p"></i></a> 
                    <a href="#"><i className="fa-brands fa-youtube"></i></a> 
                </span>
            </div>
        </div>
    </div>
  )
}

export default TopMenu