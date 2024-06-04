import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For retrieving product ID
import { Card, Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchProduct(productId); // Replace with actual API call
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]); // Refetch on product ID change

  if (isLoading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Row>
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src="placeholder.jpg" alt={product.name} />
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <span>Company: {product.company}</span>
              <br />
              <span>Category: {product.category}</span>
            </Card.Text>
            <p>
              Price: ${product.price} (with discount: {product.discount}%)
            </p>
            <p>Description: {product.description}</p>
            <div className="d-flex justify-content-between">
              <span className="text-muted">Rating: {product.rating} stars</span>
              <span
                className={product.availability ? 'badge bg-success' : 'badge bg-danger'}
              >
                {product.availability ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductDetails;
