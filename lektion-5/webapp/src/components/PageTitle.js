import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className="page-title">
        <div className="container my-5">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default PageTitle