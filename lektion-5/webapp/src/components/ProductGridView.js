import React from 'react'
import ProductGridViewItem from './ProductGridViewItem'

const ProductGridView = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        <ProductGridViewItem title="Headphones" imageUrl="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <ProductGridViewItem title="Headphones" imageUrl="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <ProductGridViewItem title="Headphones" imageUrl="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    </div>
  )
}

export default ProductGridView