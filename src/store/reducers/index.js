import { combineReducers } from 'redux';

import currencyStore from './currencyReducer';

const rootReducer = combineReducers({
  currencyStore,
});

export default rootReducer;
