import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './src/context/FavoritesContext';
import MainNavigator from './src/navigation/MainNavigator';
import colors from './src/constants/colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={colors.primary}
          />
          <SafeAreaView style={{ flex: 1 }} edges={['top']}>
            <MainNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </FavoritesProvider>
    </SafeAreaProvider>
  );
}

export default App;
