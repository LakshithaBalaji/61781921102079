import React from 'react';
import { Link } from 'react-router-bootstrap';
import { Form, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

const FilterSection = ({ filters, onFilterChange, onSortChange }) => {
  const handleCategoryChange = (event) => onFilterChange({ ...filters, category: event.target.value });
  const handleCompanyChange = (event) => onFilterChange({ ...filters, company: event.target.value });
  const handleMinPriceChange = (event) => onFilterChange({ ...filters, minPrice: event.target.value });
  const handleMaxPriceChange = (event) => onFilterChange({ ...filters, maxPrice: event.target.value });
  const handleMinRatingChange = (event) => onFilterChange({ ...filters, minRating: event.target.value });
  const handleAvailabilityChange = (event) => onFilterChange({ ...filters, availability: event.target.value });
  const handleSortChange = (event) => onSortChange(event.target.value);

  return (
    <Form>
      <FormGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Category"
          value={filters.category}
          onChange={handleCategoryChange}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Company"
          value={filters.company}
          onChange={handleCompanyChange}
        />
      </FormGroup>
      {/* Add more filter options as needed (price range, rating, etc.) */}
      <FormGroup className="mb-3">
        <FormControl as="select" value={filters.sortBy} onChange={handleSortChange}>
          <option value="price">Price (Low to High)</option>
          <option value="-price">Price (High to Low)</option>
          <option value="rating">Rating (High to Low)</option>
          {/* Add more sort options as needed */}
        </FormControl>
      </FormGroup>
      <Button variant="primary" onClick={() => { /* Implement filtering logic */ }}>
        Apply Filters
      </Button>
    </Form>
  );
};

export default FilterSection;
