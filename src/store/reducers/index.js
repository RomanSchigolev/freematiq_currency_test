import { combineReducers } from 'redux';

import counter from './counterReducer';
import currencyStore from './currencyReducer';

const rootReducer = combineReducers({
  counter,
  currencyStore,
});

export default rootReducer;
