// SecondScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const FavouriteList = ({ route }) => {
  const { countriesData } = route.params;
  const favourites = useSelector(state => state)

  console.log("DATA",favourites,route.params)

  if (!favourites || countriesData.length === 0) {
    return (
      <View>
        <Text>No data available.</Text>
      </View>
    );
  }

  const renderCountry = ({ item }) => (
    <View>
      {
        console.log("NAME ", item)
      }
      <Text>{item.name.common}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={countriesData}
        keyExtractor={(item) => item.cca3}
        renderItem={renderCountry}
      />
    </View>
  );
};

export default FavouriteList;
