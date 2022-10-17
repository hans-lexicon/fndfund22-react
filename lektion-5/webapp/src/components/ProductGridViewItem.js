import React from 'react'

const ProductGridViewItem = ({title, imageUrl}) => {
  return (
    <div className="col">
        <div className="card h-100 bg-card-dark shadow">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    </div>
  )
}

export default ProductGridViewItem