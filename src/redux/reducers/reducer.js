import { combineReducers } from 'redux';
import countryReducer from './countryDetailsReducers';
import favouriteReducer from './favouriteReducers';

const rootReducer = combineReducers({
  countryInfo: countryReducer,
  favouriteInfo: favouriteReducer,
});

export default rootReducer;
