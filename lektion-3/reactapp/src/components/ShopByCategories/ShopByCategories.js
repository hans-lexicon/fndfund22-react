import React from 'react'
import { NavLink } from 'react-router-dom';
import "./ShopByCategories.css";
import WaveLine from '../../images/wave-line.svg';

const ShopByCategories = () => {
  return (
    <section className="shop-by-category">
        <div className="container">
            <div className="section-title">
                <h1>SHOP BY <span>CATEGORY</span></h1>
                <img src={WaveLine} alt="waveline" />
                <p>We always try to give you the best product within a fast and reliable way</p>
            </div>

            <div className="grid">
                <NavLink to="/products/category/men" id="category-box-1" className="category-box">
                    <div className="category-box-title">
                        Men
                        <span>200 products</span>
                    </div>
                </NavLink>
                <NavLink to="/products/category/women" id="category-box-2" className="category-box">
                    <div className="category-box-title">
                        Women
                        <span>1000 products</span>
                    </div>
                </NavLink>
                <NavLink to="/products/category/kids" id="category-box-3" className="category-box">
                    <div className="category-box-title">
                        Kids
                        <span>500 products</span>
                    </div>
                </NavLink>
                <NavLink to="/products/category/shoes" id="category-box-4" className="category-box">
                    <div className="category-box-title">
                        Shoes
                        <span>200 products</span>
                    </div>
                </NavLink>
                <NavLink to="/products/category/heats" id="category-box-5" className="category-box">
                    <div className="category-box-title">
                        Hats
                        <span>30 products</span>
                    </div>
                </NavLink>
                <NavLink to="/products/category/sunglasses" id="category-box-6" className="category-box">
                    <div className="category-box-title">
                        Sunglasses
                        <span>22 products</span>
                    </div>
                </NavLink>
                <NavLink to="/products/category/watches" id="category-box-7" className="category-box">
                    <div className="category-box-title">
                        Watches
                        <span>5 products</span>
                    </div>
                </NavLink>
            </div>

        </div>
    </section>
  )
}

export default ShopByCategories