import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import { scale } from '../../utils/helpers';

interface ProductListProps {
  products: Product[];
  onProductPress: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductPress }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <ProductCard 
        product={item} 
        onPress={() => onProductPress(item.id)} 
        style={styles.cardStyle}
      />
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(8),
  },
  itemContainer: {
    marginBottom: scale(8),
  },
  cardStyle: {
    flexDirection: 'row',
    maxWidth: '100%',
  },
  separator: {
    height: scale(1),
    backgroundColor: '#e9ecef',
    marginVertical: scale(8),
  },
});

export default ProductList;