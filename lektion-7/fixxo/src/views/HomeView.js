import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'

const HomeView = () => {
  
  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$55.00", rating: 5, img: "https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { id: 2, name: "Modern Blue Boxers", category: "Fashion", price: "$15.00", rating: 5, img: "https://images.pexels.com/photos/5998590/pexels-photo-5998590.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { id: 3, name: "Modern Yellow T-Shirt", category: "Fashion", price: "$25.00", rating: 5, img: "https://images.pexels.com/photos/10005936/pexels-photo-10005936.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    { id: 4, name: "Modern Green Jeans", category: "Fashion", price: "$135.00", rating: 5, img: "https://images.pexels.com/photos/3755019/pexels-photo-3755019.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }
  ])
  
  return (
    <>
      <header className="bg-gradient-gray">
        <MainMenuSection />  
        <ShowcaseSection />       
      </header>    
      <ProductGridSection title="Featured Products" products={products} /> 
    </>
  )
}

export default HomeView