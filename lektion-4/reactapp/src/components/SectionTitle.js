import React from 'react'

const SectionTitle = ({title, ingress}) => {
  return (
    <div className="__section-title">
        <h1>{title}</h1>
        <i className="__horizontal-line"></i>
        <p>{ingress}</p>
    </div>
  )
}

export default SectionTitle