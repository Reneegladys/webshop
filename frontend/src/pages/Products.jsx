import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api'; // Assuming you have an API function
import { Link } from 'react-router-dom'; // Link for routing

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(); // Skickar inget 'search' argument
        console.log(response); 
        setProducts(response);  // Uppdaterar med data från API
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Laddar produkter...</div>; // En enkel loading-state
  }

  return (
    <div>
      <h1>Produkter</h1>
      {Array.isArray(products) && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Pris: ${product.price}</p>
              <Link to={`/product/${product._id}`}>Se detaljer</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga produkter hittades.</p>
      )}
    </div>
  );
};

export default Products;
