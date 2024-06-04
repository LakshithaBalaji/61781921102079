import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function ProductCard({ product }) {
  const { id, name, image, price, rating } = product; // Destructure product properties

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="product-details">
        <h3><Link to={`/product/${id}`}>{name}</Link></h3>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Rating: {rating} stars</p>
      </div>
    </div>
  );
}

export default ProductCard;
