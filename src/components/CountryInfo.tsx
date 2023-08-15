import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

interface CountryInfoProps {
  country: {
    flags: string;
    name: string;
    capital: any;
    population: number;
    area: number;
    languages: Array<{ name: string }>;
    timezones: string[];
    currencies: Array<{ name: string; symbol: string }>;
  };
}
const addFavourites = (country: any) => {

}
const CountryInfo: React.FC<CountryInfoProps> = ({ country, color }) => {
  return (
    <View >
      {country && country.flags &&



        <TouchableOpacity style={styles.card} onPress={addFavourites(country)} >
          <View style={{ flex: 0.5, flexWrap: 'wrap' }}>
            <SvgUri width="100%" height={'50%'} uri={country.flags && country.flags.svg} />
          </View>
          <View style={styles.details}>
            <Text style={[styles.countryName, { color: color }]}>Name: {country.name.common}</Text>
            <Text style={[styles.countryDetails, { color: color }]}>Capital: {country.capital[0]}</Text>
            <Text style={[styles.countryDetails, { color: color }]}>Population: {country.population}</Text>
            <Text style={[styles.countryDetails, { color: color }]}>Area: {country.area} sq km</Text>
            <Text style={[styles.countryDetails, { color: color }]}>Languages: {country.languages.eng}</Text>
            <Text style={[styles.countryDetails, { color: color }]}>Currency: {Object.values(country.currencies).map(({ name }) => name).join(', ')
            }
            </Text>
            <Text style={{ color: color }}>Timezones:</Text>
            {country.timezones.map((timezone, index) => (
              <Text key={index} style={[styles.countryDetails, { color: color }]} >
                {timezone}
              </Text>
            ))}


          </View>

        </TouchableOpacity>
      }
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 10,
    top: 0
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,

  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryDetails: {
    fontSize: 14,
  },
  details: {
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    left: '5%',
    flexDirection: 'column',
  },

});

export default CountryInfo;
