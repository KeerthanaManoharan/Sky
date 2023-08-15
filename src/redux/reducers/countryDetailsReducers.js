
const initialState = {};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      return {
        ...state,
        [action.payload.listName]: action.payload.countryList,
      };
      case 'GET_COUNTRY_LIST':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default countryReducer;