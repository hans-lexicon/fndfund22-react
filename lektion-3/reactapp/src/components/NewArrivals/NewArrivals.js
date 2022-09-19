import React, { useState } from 'react'
import "./NewArrivals.css";
import WaveLine from '../../images/wave-line.svg';
import PlaceholderMaleBody from '../../images/placeholders/placeholder-male-body.png';
import PlaceholderMaleChest from '../../images/placeholders/placeholder-male-chest.png';
import PlaceholderFemaleBody from '../../images/placeholders/placeholder-female-body.png';

const NewArrivals = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Blue silk flare sleeved top", category: "Fashion", oldPrice: 50.00, newPrice: 20.00, rating: 4, image: "images/placeholders/placeholder-male-body.png"},
        { id: 2, name: "Black silk flare sleeved top", category: "Fashion", oldPrice: 56.00, newPrice: 22.00, rating: 2, image: "images/placeholders/placeholder-male-body.png"},
        { id: 3, name: "New look men's coat", category: "Fashion", oldPrice: 44.00, newPrice: 35.00, rating: 5, image: "images/placeholders/placeholder-male-chest.png"},
        { id: 4, name: "Circle pattern girls shirt", category: "Fashion", oldPrice: 38.00, newPrice: 15.00, rating: 3, image: "images/placeholders/placeholder-female-body.png" }
    ])

    const showRating = (rating) => {
        let element = `<div className="text-theme">`

        for (let i = 0; i < rating; i++) {
            element += `<i className="fa-solid fa-star"></i>`
        }

        element += `</div>`
        return element
    }

    return (
        <section class="new-arrivals">
            <div class="container">
                <div class="section-title">
                    <h1>NEW <span>ARRIVALS</span></h1>
                    <img src={WaveLine} alt="waveline" />
                    <p>Check out our latest products from top fashion designers</p>
                </div>

                <div class="row row-cols-1 row-cols-md-4 g-4">


                    {
                        products.map(product => (
                            <div class="col">
                                <div class="card h-100">
                                    <ul class="card-menu">
                                        <li><i class="fa-solid fa-circle instock"></i></li>
                                        <li><i class="fa-regular fa-heart"></i></li>
                                        <li><i class="fa-regular fa-shuffle"></i></li>
                                        <li><i class="fa-regular fa-magnifying-glass"></i></li>
                                        <li><i class="fa-regular fa-cart-shopping"></i></li>
                                    </ul>
                                    <img src={PlaceholderMaleBody} alt="placeholder" />
                                    <div class="card-body">
                                        <h1>{product.name}</h1>
                                        <button disabled>{product.category}</button>
                                        <p class="card-old-price">€{product.oldPrice}</p>
                                        <div class="d-flex justify-content-between align-items-center w-100 ">
                                            <p class="card-discount-price ">€{product.newPrice}</p>
                                            {showRating(product.rating)}
                                        </div>                      
                                    </div>
                                    <div class="card-background"></div>
                                </div>
                            </div> 
                        )) 
                    }


                </div>
            </div>
        </section>
    )
}

export default NewArrivals