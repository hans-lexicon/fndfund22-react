import React from 'react'

const Card = ({item}) => {
  return (
    <div class="col">
        <div class="card h-100 shadow">
          <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Card