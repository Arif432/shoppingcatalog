import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '../screens/ProductsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SCREEN_NAMES from './ScreenNames';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProductsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen 
      name={SCREEN_NAMES.PRODUCTS_LIST} 
      component={ProductsScreen} 
    />
    <Stack.Screen 
      name={SCREEN_NAMES.PRODUCT_DETAIL} 
      component={ProductDetailScreen} 
    />
  </Stack.Navigator>
);

const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        
        if (route.name === SCREEN_NAMES.PRODUCTS_STACK) {
          iconName = 'shopping-bag';
        } else if (route.name === SCREEN_NAMES.FAVORITES) {
          iconName = 'favorite';
        }
        
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2A9D8F',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen 
      name={SCREEN_NAMES.PRODUCTS_STACK} 
      component={ProductsStack} 
      options={{ title: 'Products' }}
    />
    <Tab.Screen 
      name={SCREEN_NAMES.FAVORITES} 
      component={FavoritesScreen} 
      options={{ title: 'Favorites' }}
    />
  </Tab.Navigator>
);

export default MainNavigator;