import React from 'react'
import { NavLink } from 'react-router-dom';

const Button = ({text, navigateTo}) => {
  return (
    <NavLink to={navigateTo} className="btn btn-custom btn-dark shadow">
        {text} 
        <i className="fa-regular fa-octagon-plus"></i>
    </NavLink>
  )
}

export default Button