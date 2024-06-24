// AddToCart.js
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
function AddToCart({ product, handleAddToCart, handleIncrement, handleDecrement, qty }) {
    function increase(){
        // dispatch({type: 'INCREMENT', payload: product})
        dispatchEvent({type:"ADD_TO_CART",payload:product});

    }
    function decrease(){
        // dispatch({type: 'DECREMENT', payload: product})
        dispatchEvent({type:"REMOVE_FROM_CART",payload:product});
    }
    let cart = useSelector((state) => {
        return state.items[product.id].qty;
    });

  return (
    <div className="add-to-cart">
      {qty > 0 ? (
        <div>
          <button onClick={decrease}>-</button>
          <span>{qty}</span>
          <button onClick={increase}>+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default AddToCart;
