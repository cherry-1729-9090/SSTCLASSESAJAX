import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({});

  function incrCart(product) {
    if (cart[product.id]) {
      cart[product.id].qty += 1;
    } else {
      cart[product.id] = { ...product, qty: 1 };
    }
    console.log(cart);
    
    setCart({ ...cart });
  }

  function decrCart(product) {
    if (cart[product.id].qty > 1) {
      cart[product.id].qty -= 1;
    } else {
      delete cart[product.id];
    }
    console.log(cart);
    setCart({ ...cart });
  }

  return (
    <div className="App">
      <Products incrCart={incrCart} decrCart={decrCart} />
    </div>
  );
}

export default App;
