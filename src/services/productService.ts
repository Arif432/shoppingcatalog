import { apiClient } from './api';
import { Product } from '../types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await apiClient.get(`/products/category/${category}`);
  return response.data;
};