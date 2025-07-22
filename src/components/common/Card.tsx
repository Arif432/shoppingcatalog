import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

const Card: React.FC<{ children: React.ReactNode; style?: ViewStyle }> = ({ 
  children, 
  style 
}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 4,
  },
});

export default Card;