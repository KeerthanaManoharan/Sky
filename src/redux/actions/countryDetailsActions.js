
export const setCountryList = (listName, countryList) => ({
  type: 'SET_COUNTRY_LIST',
  payload: { listName, countryList },
});

//remove
export const getCountryList = (listName) => ({
  type: 'GET_COUNTRY_LIST',
  payload: { listName },
});