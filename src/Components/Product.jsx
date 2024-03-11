import React, { useState, useEffect } from 'react';
import './Product.css'; // Import your CSS file
import Header from './Header';

import list from './Data';
import ProdFooter from './ProdFooter';

function Product({handleAddCart}) {
 

  return (
    <>
   {/*  <Header /> */}
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {list.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.name} />
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() =>handleAddCart(product)}>Add Cart</button>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
      <ProdFooter/>
      
    </div>
    </>
  );
}

export default Product;
