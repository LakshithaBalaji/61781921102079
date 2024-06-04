import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const fetchProducts = async () => {
  setIsLoading(true); // Assuming these functions are defined within App
  setError(null);
  try {
    const response = await fetch('./db.json'); // Replace with actual path if needed
    const data = await response.json();
    setProducts(data.products); // Assuming the data structure
  } catch (error) {
    setError(error.message); // Handle errors more informatively
  } finally {
    setIsLoading(false);
  }
};

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default App;
