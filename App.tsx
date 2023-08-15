/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, } from 'react-native';
import ThemeContextProvider from './src/theme/ThemeContextProvider';
import Search from './src/components/Search';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigator/navigator';
import FavouriteList from './src/components/favouriteList';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AppNavigator />
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;