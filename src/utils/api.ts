import axios from 'axios';
const BASE_URL = 'https://restcountries.com/v3.1/name/';
export const fetchCountryData = async (countryName: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${countryName}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching country data:', error);
    return null;
  }
};
