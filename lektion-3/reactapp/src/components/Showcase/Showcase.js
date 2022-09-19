import React from 'react';
import { NavLink } from 'react-router-dom';
import './Showcase.css';
import ShowcaseImage from '../../images/showcase-image.svg';

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <div className="showcase-body">
                <h1>Shopping is <strong>MORE FUN</strong></h1>
                <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
                <NavLink to="/products" className="btn btn-lg btn-white">SHOP NOW</NavLink>
            </div>
            <img src={ShowcaseImage} alt="two people standing" />
        </div>
    </section>
  )
}

export default Showcase