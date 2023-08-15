// SecondScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const FavouriteList = ({ route }) => {
  const { countriesData } = route.params;

  if (!countriesData || countriesData.length === 0) {
    return (
      <View>
        <Text>No data available.</Text>
      </View>
    );
  }

  const renderCountry = ({ item }) => (
    <View>
      <Text>{item.name.common}</Text>
      {/* Display other country details here */}
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
