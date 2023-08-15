
const initialState = {};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
    console.log("STATE OF SET", state)

      return {
        ...state,
        [action.payload.listName]: action.payload.countryList,
      };
      case 'GET_COUNTRY_LIST':
      console.log("STATE OF GET", state)
      return {
        ...state,
        // [action.payload.listName]: action.payload.countryList,
      };
    default:
      return state;
  }
};

export default countryReducer;