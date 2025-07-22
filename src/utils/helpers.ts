import { Dimensions } from 'react-native';

// Responsive scaling function
export const scale = (size: number) => {
  const { width } = Dimensions.get('window');
  const scaleRatio = width / 375; // 375 is standard iPhone width
  return Math.round(size * scaleRatio);
};

// Capitalize first letter of each word
export const capitalize = (str: string) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

// Format price with commas
export const formatPrice = (price: number) => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};