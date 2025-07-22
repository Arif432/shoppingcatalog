import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Card from '../common/Card';
import Button from '../common/Button';
import FavoriteButton from '../favorites/FavoriteButton';
import { Product } from '../../types/product';
import { scale } from '../../utils/helpers';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  style?: ViewStyle;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, style }) => {
  // Check if we're in list mode (flexDirection is row)
  const isListMode = style?.flexDirection === 'row';
  
  return (
    <Card style={[styles.container, style]}>
      <Image 
        source={{ uri: product.image }} 
        style={[
          styles.image, 
          isListMode && styles.listImage
        ]} 
        resizeMode="contain"
      />
      
      <View style={[
        styles.content,
        isListMode && styles.listContent
      ]}>
        <Text 
          style={styles.title} 
          numberOfLines={isListMode ? 2 : 1}
        >
          {product.title}
        </Text>
        
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        
        <View style={styles.footer}>
          <Button 
            title="Details" 
            onPress={onPress} 
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <FavoriteButton 
            productId={product.id} 
            product={product}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: scale(8),
    maxWidth: scale(160),
  },
  image: {
    width: '100%',
    height: scale(120),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  listImage: {
    width: scale(100),
    height: scale(100),
    borderRadius: 8,
    marginRight: scale(12),
  },
  content: {
    padding: scale(12),
  },
  listContent: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: scale(14),
    fontWeight: '500',
    marginBottom: scale(4),
  },
  price: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#2A9D8F',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(8),
  },
  button: {
    paddingVertical: scale(4),
    paddingHorizontal: scale(8),
    backgroundColor: '#264653',
  },
  buttonText: {
    fontSize: scale(12),
  },
});

export default ProductCard;