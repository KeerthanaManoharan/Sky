/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View,} from 'react-native';
import ThemeContextProvider from './src/theme/ThemeContextProvider';
import Search from './src/components/Search';
import { Provider } from 'react-redux';
import store  from './src/redux/store';
import AppNavigator from './src/navigator/navigator';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import FavouriteList from './src/components/favouriteList';
// const Stack = createStackNavigator();
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
      <Search/> 
        {/* <Search/> */}
      {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="FavouriteList" component={FavouriteList} />
      </Stack.Navigator>
    </NavigationContainer> */}
      </ThemeContextProvider>
 </Provider>
  );
}

export default App;