import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/ProductList.css'


const products = ['car', 'bike', 'motocycle']

const list = products.map(product => (
  <li key={product}>
    <Link to={`/product/${product}`}>{product}</Link>
  </li>
))

const ProductList = () => {
  return (
    <div className='products'>
      <h2>Lista produktów</h2>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );

}

export default ProductList;