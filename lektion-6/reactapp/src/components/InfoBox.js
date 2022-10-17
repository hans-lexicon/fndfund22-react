import React from 'react'

const InfoBox = ({title, description, img}) => {
  return (
    <div className="info-box">
        <img src={img} alt={title} />
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default InfoBox