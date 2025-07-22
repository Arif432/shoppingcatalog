import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductList from '../components/products/ProductList';
import { useFavorites } from '../context/FavoritesContext';
import LoadingIndicator from '../components/common/LoadingIndicator';
import { scale } from '../utils/helpers';

const FavoritesScreen = ({ navigation }) => {
  const { favorites, loading } = useFavorites();

  const handleProductPress = (productId: number) => {
    navigation.navigate('ProductDetail', { productId });
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet</Text>
        <Text style={styles.emptySubtext}>Tap the ♡ icon on products to add them</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductList 
        products={favorites} 
        onProductPress={handleProductPress} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(20),
  },
  emptyText: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: '#6c757d',
    marginBottom: scale(10),
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: scale(16),
    color: '#adb5bd',
    textAlign: 'center',
    maxWidth: scale(300),
  },
});

export default FavoritesScreen;