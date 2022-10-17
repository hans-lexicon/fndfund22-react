import React from 'react'
import Card from './Card'

const CardDeck = ({items = [], columns = 3}) => {
  return (
    <div className={`my-4 row row-cols-1 row-cols-md-${columns} g-4`}>
        { 
          items.map(item => (<Card item={item} />))
        }
    </div>
  )
}

export default CardDeck