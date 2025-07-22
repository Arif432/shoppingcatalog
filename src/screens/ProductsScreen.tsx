import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProductGrid from '../components/products/ProductGrid';
import CategoryFilter from '../components/categories/CategoryFilter';
import LoadingIndicator from '../components/common/LoadingIndicator';
import useProducts from '../hooks/useProducts';

const ProductsScreen = ({ navigation }) => {
  const { 
    products, 
    loading, 
    error, 
    selectedCategory, 
    setSelectedCategory 
  } = useProducts();

  const handleProductPress = (productId: number) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      {loading && <LoadingIndicator />}
      
      {error && (
        <View style={styles.center}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      
      {!loading && !error && (
        <ProductGrid 
          products={products} 
          onProductPress={handleProductPress}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: '#e63946',
    fontSize: 16,
  },
});

export default ProductsScreen;