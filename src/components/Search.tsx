import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Keyboard, TouchableOpacity,Image } from 'react-native';
import CountryInfo from './../components/CountryInfo';
import { ThemeContext } from '../theme/ThemeContextProvider';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCountryList, getCountryList } from './../redux/actions/countryDetailsActions';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const App = ()=> { 
   const fetchCountryData = async (countryName: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}${countryName}`);
      return response.data[0];
    } catch (error) {
      setLoading(false);
      setError(error);
      return error;
    }
  };
  const dispatch = useDispatch();

  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const { colorPalette, toggleTheme } = useContext(ThemeContext);
  const { backgroundColor, textColor } = colorPalette;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const test = useSelector(state => state)
  // const navigation = useNavigation(); 


  const handleFetchData = async () => {
   navigation.navigate('FavouriteList', { countryData });
  };
  const searchCountry = async () => {
    Keyboard.dismiss()
    if (test.countryInfo[countryName] != null) {
      setLoading(false);
      setCountryData(test.countryInfo[countryName]);
    } else {

      const data = await fetchCountryData(countryName);
      dispatch(setCountryList(countryName, data));
      setCountryData(data);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor }}>

      <View style={[styles.header, styles.darkHeader]}>
        <View style={styles.leftSection}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
            <Text style={{ color: textColor }}>
              {"Dark/Light Theme"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
        //onPress={handleWishlistPress}
        >
        <Image style={{
            resizeMode: 'cover',
            height: 50,
            width: 25,
          }} source={{uri: "https://images.unsplash.com/photo-1526045612212-70caf35c14df"}} />     
           </TouchableOpacity>
      </View>
      <View style={{ margin: '2%' }}>
        <TextInput
          style={[styles.input,{color:textColor}]}
          placeholder="Enter country name"
          value={countryName}
          onChangeText={text => setCountryName(text)}
        />
        <Button title="Search" onPress={searchCountry} />
        {loading && <Text>Loading...</Text>}
        {error && <Text>{"No data found"}</Text>}
        {countryData && <CountryInfo country={countryData} color={textColor}/>}
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginBottom: 8,
  },
  toggleButton: {
    marginVertical: 10,
  },
  toggleButtonText: {
    color: 'blue',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#007bff', // Change to your header background color
  },
  darkHeader: {
    backgroundColor: 'teal', // Change to your dark mode header background color
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modeText: {
    marginLeft: 10,
    color: '#fff',
  },

});

export default App;
