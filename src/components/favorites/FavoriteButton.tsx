import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFavorites } from '../../context/FavoritesContext';
import { scale } from '../../utils/helpers';
import { fadeIn, fadeOut } from '../../utils/animations';
import { Product } from '../../types/product';

interface FavoriteButtonProps {
  productId: number;
  product?: Product; // Add product prop
  size?: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  productId,
  product,
  size = scale(24)
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(productId);

  const handlePress = () => {
    // If product is provided, use it; otherwise we need the product data
    if (product) {
      toggleFavorite(product);
    } else {
      // Log error if no product is provided - this shouldn't happen in normal usage
      console.warn('FavoriteButton: No product data provided for productId:', productId);
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Icon 
        name={favorited ? 'favorite' : 'favorite-border'} 
        size={size} 
        color={favorited ? '#E76F51' : '#ccc'} 
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});

export default FavoriteButton;