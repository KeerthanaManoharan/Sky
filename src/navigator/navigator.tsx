import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './../components/Search';
import FavouriteList from './../components/favouriteList';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="FavouriteList" component={FavouriteList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
