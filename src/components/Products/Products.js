import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CartContext from '../../Context/context';

function Products() {
  const { incrCart, decrCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Products:", data); // Log fetched products
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
      });
  }, []);

  useEffect(() => {
    const filterProducts = (selectedCategory) => {
      console.log(`Filtering: category: ${selectedCategory}`);
      
      const electronicsSubcategories = ['Laptops', 'Mobile', 'TV', 'Speakers', 'Camera', 'Smart Light', 'Washing Machine', 'Refrigerator'];
      
      let filteredProducts;
      if (selectedCategory === 'Electronics') {
        filteredProducts = products.filter(product => electronicsSubcategories.includes(product.category));
      } else {
        filteredProducts = products.filter(product => product.category === selectedCategory || selectedCategory === "");
      }
      
      console.log('Filtered Products:', filteredProducts);
      return filteredProducts;
    };

    setFilteredProducts(filterProducts(category));
  }, [products, category]);

  const filterProductsByPrice = (min, max) => {
    const filtered = products.filter(product => product.price >= min && product.price <= max);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="filters">
        <div className="cat">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
       
      </div>

      {filteredProducts.map(product => (
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
