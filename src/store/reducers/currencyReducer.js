import { ADD_CURRENCY_PAIR, DELETE_CURRENCY_PAIR, GET_CURRENCIES } from '../actions/types';

const initialState = {
  listCurrencyPairs: [],
  listCurrencies: [],
};

const currencyStore = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
        listCurrencies: [...state.listCurrencies, ...action.payload],
      };
    case DELETE_CURRENCY_PAIR:
      return {
        ...state,
        listCurrencyPairs: [...state.listCurrencyPairs.filter((item) => item.id !== action.payload)],
      };
    case ADD_CURRENCY_PAIR:
      return {
        ...state,
        listCurrencyPairs: [...state.listCurrencyPairs, action.payload],
      };
    // return {
    //   ...state,
    //   listCurrencyPairs: [...state.listCurrencyPairs, ...action.payload],
    // };
    default:
      return state;
  }
};

export default currencyStore;
