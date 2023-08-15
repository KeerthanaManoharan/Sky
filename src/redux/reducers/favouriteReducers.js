
const initialState = {};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAVOURITE_LIST':
      return {
        ...state,
        [action.payload.listName]: action.payload.countryList,
      };
      case 'GET_FAVOURITE_LIST':
      console.log("STATE OF GET", state)
      return {
        ...state,
        // [action.payload.listName]: action.payload.countryList,
      };
    default:
      return state;
  }
};

export default favouriteReducer;