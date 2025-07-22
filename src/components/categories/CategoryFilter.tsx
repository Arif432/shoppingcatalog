import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Button from '../common/Button';
import { ProductCategory } from '../../types/product';
import { scale } from '../../utils/helpers';

interface CategoryFilterProps {
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
}

const CATEGORIES: (ProductCategory | 'all')[] = [
  'all',
  'electronics',
  "men's clothing",
  "women's clothing"
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {CATEGORIES.map(category => (
          <Button
            key={category}
            title={category === 'all' ? 'All' : category}
            onPress={() => onSelectCategory(category)}
            style={[
              styles.button,
              selectedCategory === category && styles.selectedButton
            ]}
            textStyle={[
              styles.buttonText,
              selectedCategory === category && styles.selectedText
            ]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#f1faee',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e9ecef',
    marginRight: 8,
  },
  selectedButton: {
    backgroundColor: '#2a9d8f',
  },
  buttonText: {
    fontSize: scale(14),
    color: '#495057',
    textTransform: 'capitalize',
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CategoryFilter;