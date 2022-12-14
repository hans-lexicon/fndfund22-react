import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
    const [showMenu, setShowMenu] = useState(false)
  
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  
    return (
    <nav className="mainmenu container">
        <NavLink className="logo" to="/" end>Fixxo.</NavLink>
        <div className={ `menu-links ${ showMenu ? "d-grid" : "" }` }>
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/products">Products</NavLink>
            <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>          
        </div>
        <div className="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" badge="" />          
            <MenuIcon link="/compare" icon="fa-regular fa-code-compare" badge="" hideOnMobile={true} />          
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart" badge="" hideOnMobile={true} />          
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" badge="2" /> 

             <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>        
        </div>
    </nav>
  )
}

export default MainMenuSection