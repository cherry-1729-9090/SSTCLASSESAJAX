import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useEffect, useState } from "react";

function Products() {
  let [products, setProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data); // Set the fetched data to products
      });
  }, []); // Empty dependency array to run only once after mounting

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      function updateWindowDimensions() {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        // console.log({width,height});
      }
      window.addEventListener('resize', updateWindowDimensions);
    }, []);   
  }




  return (
    <div>
      <div><Effect /></div>
      {
        products.map((item) => {
          return (<ProductCard key={item.id} title={item.title} price={item.price} />)
        })
      }
    </div>
  )
}

export let a = 10;
export let b = 20;
export default Products;



// oldDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ] 

// newDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 4" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]
