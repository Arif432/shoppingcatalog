import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFavorites } from '../../context/FavoritesContext';
import { scale } from '../../utils/helpers';
import { fadeIn, fadeOut } from '../../utils/animations';

interface FavoriteButtonProps {
  productId: number;
  size?: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  productId,
  size = scale(24)
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(productId);

  const handlePress = () => {
    toggleFavorite({ id: productId } as any); 
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
    padding: 4,
  },
});

export default FavoriteButton;