import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';

function Products({ incrCart, decrCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          title={product.title} 
          price={product.price} 
          product={product} 
          incrCart={incrCart} 
          decrCart={decrCart} 
        />
      ))}
    </div>
  );
}

export default Products;
