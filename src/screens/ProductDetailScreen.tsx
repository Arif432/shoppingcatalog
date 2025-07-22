import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet 
} from 'react-native';
import Button from '../components/common/Button';
import FavoriteButton from '../components/favorites/FavoriteButton';
import { useFavorites } from '../context/FavoritesContext';
import { useRoute } from '@react-navigation/native';
import { Product } from '../types/product';
import { scale } from '../utils/helpers';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { productId } = route.params as { productId: number };
  
  // In a real app, you would fetch product details by ID
  // For demo, we'll use mock data
  const mockProduct: Product = {
    id: productId,
    title: 'Sample Product',
    price: 29.99,
    description: 'This is a detailed product description explaining all features and benefits of the product.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 4.5,
      count: 120
    }
  };

  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavorited = isFavorite(productId);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: mockProduct.image }} 
        style={styles.image} 
        resizeMode="contain"
      />
      
      <View style={styles.header}>
        <Text style={styles.title}>{mockProduct.title}</Text>
        <FavoriteButton 
          productId={productId} 
          size={scale(30)} 
        />
      </View>
      
      <View style={styles.priceRow}>
        <Text style={styles.price}>${mockProduct.price.toFixed(2)}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{mockProduct.rating.rate} ★</Text>
          <Text style={styles.ratingCount}>({mockProduct.rating.count})</Text>
        </View>
      </View>
      
      <Text style={styles.category}>
        Category: {mockProduct.category}
      </Text>
      
      <Text style={styles.description}>
        {mockProduct.description}
      </Text>
      
      <Button 
        title={isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={() => toggleFavorite(mockProduct)}
        style={[
          styles.favButton,
          isFavorited && styles.removeFavButton
        ]}
        textStyle={styles.favButtonText}
      />
      
      <Button 
        title="Add to Cart" 
        onPress={() => {}} 
        style={styles.cartButton}
        textStyle={styles.cartButtonText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: scale(300),
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  price: {
    fontSize: scale(28),
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: scale(18),
    color: '#e9c46a',
    marginRight: 4,
  },
  ratingCount: {
    fontSize: scale(16),
    color: '#6c757d',
  },
  category: {
    fontSize: scale(16),
    color: '#6c757d',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  description: {
    fontSize: scale(16),
    lineHeight: 24,
    color: '#495057',
    marginBottom: 24,
  },
  favButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    marginBottom: 12,
  },
  removeFavButton: {
    backgroundColor: '#fff0f3',
    borderColor: '#ffccd5',
  },
  favButtonText: {
    color: '#6c757d',
  },
  cartButton: {
    backgroundColor: '#e76f51',
  },
  cartButtonText: {
    color: 'white',
  },
});

export default ProductDetailScreen;