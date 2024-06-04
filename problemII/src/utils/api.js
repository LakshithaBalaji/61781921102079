import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Adjust port if needed

export const fetchProducts = async (filters) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: filters, // Include filter parameters if applicable
    });
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
};

export const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
};
