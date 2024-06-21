// App.js
import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './Context/context';

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
    <CartContext.Provider value={{ cart, incrCart, decrCart }}>
      <div className="App">
        <Products />
      </div>
    </CartContext.Provider>
  );
}

export default App;
