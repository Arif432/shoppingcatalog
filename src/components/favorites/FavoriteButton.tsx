import React, { useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFavorites } from '../../context/FavoritesContext';
import { scale } from '../../utils/helpers';

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

  // Initialize shared values with useMemo to ensure they're created once

  const onToggleComplete = useCallback(() => {
    toggleFavorite({ id: productId } as any);
  }, [productId, toggleFavorite]);

  const handlePress = useCallback(() => {
    'worklet';
    

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <View >
        <Icon
          name={favorited ? 'favorite' : 'favorite-border'}
          size={size}
          color={favorited ? '#E76F51' : '#ccc'}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 4,
  },
});

export default FavoriteButton;