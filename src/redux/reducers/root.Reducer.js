import { combineReducers } from 'redux';
import dateReducer from './date.reducer';
import fligthReducer from './flight.reducer';

const rootReducer = combineReducers({
  fligthReducer,
  dateReducer,
});

export default rootReducer;
