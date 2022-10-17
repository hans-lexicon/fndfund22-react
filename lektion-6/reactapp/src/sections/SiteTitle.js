import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteTitle = () => {
  return (
    <section className="site-title">
        <div className="container">
            <h1>My Account</h1>
            <ul className="breadcrumb">
                <li><NavLink to="/">Home</NavLink></li>
                <li>My Account</li>
            </ul>
        </div>
    </section>
  )
}

export default SiteTitle