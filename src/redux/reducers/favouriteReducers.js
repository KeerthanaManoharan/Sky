
const initialState = {};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVOURITE_LIST':
      return {
        ...state,
        [action.payload.listName]: action.payload.countryList,
      };
      case 'GET_FAVOURITE_LIST':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default favouriteReducer;