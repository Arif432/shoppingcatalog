import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import { scale } from '../../utils/helpers';

interface ProductGridProps {
  products: Product[];
  onProductPress: (productId: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductPress }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <ProductCard 
      product={item} 
      onPress={() => onProductPress(item.id)} 
    />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(4),
    paddingBottom: scale(16),
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: scale(8),
  },
});

export default ProductGrid;