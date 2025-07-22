import { useState, useEffect, useCallback } from 'react';
import { fetchProducts, fetchProductsByCategory } from '../services/productService';
import { Product, ProductCategory } from '../types/product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = selectedCategory === 'all'
        ? await fetchProducts()
        : await fetchProductsByCategory(selectedCategory);
      setProducts(data);
    } catch (err) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    products,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    refresh: loadProducts,
  };
};

export default useProducts;