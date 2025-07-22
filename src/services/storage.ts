import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

const FAVORITES_KEY = '@favorites';

export const getFavorites = async (): Promise<Product[]> => {
  const favoritesJson = await AsyncStorage.getItem(FAVORITES_KEY);
  return favoritesJson ? JSON.parse(favoritesJson) : [];
};

export const saveFavorites = async (favorites: Product[]): Promise<void> => {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};