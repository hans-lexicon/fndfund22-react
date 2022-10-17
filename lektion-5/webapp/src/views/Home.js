import React from 'react'
import Button from '../components/Button'
import ProductGridView from '../components/ProductGridView'


const Home = () => {
  return (
    <section className="home">
      <div className="container my-5 d-flex justify-content-end">
        <Button text="NEW" navigateTo="/products/new" />
      </div>

      <div className="container my-5">
        <ProductGridView />
      </div>
    </section>
  )
}

export default Home