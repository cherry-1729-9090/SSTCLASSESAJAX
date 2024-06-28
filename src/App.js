// App.js
import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './Context/context';
import React from 'react';
import Categories from './components/categories/Categories';
import { Provider } from 'react-redux';
import store from './store'; // Import the store

function App() {
  const [cart, setCart] = useState({});
  const incrCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: prevCart[product.id]
        ? { ...prevCart[product.id], qty: prevCart[product.id].qty + 1 }
        : { ...product, qty: 1 }
    }));
  };

  const decrCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id].qty > 1) {
        newCart[product.id].qty -= 1;
      } else {
        delete newCart[product.id];
      }
      return newCart;
    });
  };

  return (
    <Provider store={store}> {/* Wrap the app in the Provider */}
      <CartContext.Provider value={{ cart, incrCart, decrCart }}>
        <div className="App">
          <Products />
        </div>
      </CartContext.Provider>
    </Provider>
  );
}

export default App;
