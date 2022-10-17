import React, { useEffect, useState } from 'react'
import CardSection from '../sections/CardSection'
import axios from 'axios'

const Home = () => {

  const [topProducts, setTopProducts] = useState()
  const [newArrivals, setNewArrivals] = useState()

  // fetch - js
  useEffect(() => {
    fetch('https://localhost:7228/api/products')
    .then(res => res.json())
    .then(data => setTopProducts(data))
  })

  // axios - npm install axios
  useEffect(() => {
    axios.get('https://localhost:7228/api/products/3')
    .then(res => setNewArrivals(res.data))
  })


  return (
    <>
      <div className="container my-5">
        <CardSection title="Top Products" ingress="View our top products for 2022" items={topProducts} columns={4} />
      </div>

      <div className="bg-theme-dark" style={{ height: "350px" }}>

      </div>
      <div className="container my-5">
        <CardSection title="New Arrivals" ingress="View our latest products" items={newArrivals} columns={3} />
      </div> 
    </>
  )
}

export default Home