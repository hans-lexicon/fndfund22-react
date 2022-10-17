
import { useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    const js = { name, price }

    fetch('https://localhost:7095/api/Products', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(js)
    })
    .then(res => res.json())
    .then(data => {
      
      console.log(data)
      console.log(" ")
      setProducts(data)
      console.log(products)
    })


  }



  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input id="productName" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <input id="productPrice" type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">ADD PRODUCT</button>
      </form>

      <div className="mt-5">
        <div>PRODUCT NAME: {name}</div>
        <div>PRICE: {price} SEK</div>
      </div>

    </div>
  );
}

export default App;
