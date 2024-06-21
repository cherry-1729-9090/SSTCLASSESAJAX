// AddToCart.js
import React from 'react';

function AddToCart({ product, handleAddToCart, handleIncrement, handleDecrement, qty }) {
  return (
    <div className="add-to-cart">
      {qty > 0 ? (
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{qty}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default AddToCart;
