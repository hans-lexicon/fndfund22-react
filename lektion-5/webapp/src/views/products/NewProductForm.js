import React, { useState } from 'react'
import axios from 'axios'

const NewProductForm = () => {

    return (
        <section className="new-product-form">
            <div className="container my-5">
                <form >
                    <div className="mb-4">
                        <input className="custom-form"  />
                    </div>
                    <div className="mb-4">
                        <input className="custom-form" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-custom btn-dark shadow">ADD</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default NewProductForm