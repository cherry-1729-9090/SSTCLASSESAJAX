// ProductCard.js
import React, { useState, useRef } from 'react';
import './ProductCard.css';
import AddToCart from '../AddToCart/AddToCart';
import logo1 from '../../assests/logo1.png';

function ProductCard({ title, price, product, incrCart, decrCart }) {
  const [inputV, setInputV] = useState('Class');
  const [qty, setQty] = useState(0);

  const pRef = useRef(0);
  const iRef = useRef(0);
  const oRef = useRef(0);

  const handleAddToCart = () => {
    incrCart(product);
    setQty(1);
  };

  const handleIncrement = () => {
    incrCart(product);
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    decrCart(product);
    setQty(qty - 1);
  };

  const printTitle = () => {
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  };

  const displayOutput = (e) => {
    setInputV(e.target.value);
  };

  return (
    <div className="product-card">
      <p onClick={printTitle}>{title}</p>
      <p ref={pRef}>Currency: {price.currency}, Value: {price.value}, Discount: {price.discount}</p>
      <img src={logo1} alt="Product Logo" />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <AddToCart
        product={product}
        handleAddToCart={handleAddToCart}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        qty={qty}
      />
    </div>
  );
}

export default ProductCard;
