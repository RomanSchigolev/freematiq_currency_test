import {ADD_PAIR, DELETE_PAIR, CURRENCY_SET} from "../actions/types";

const initialState = {
  listCurrencyPairs: [],
  listCurrencies: []
};

const currencyStore = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_SET:
      return {
        ...state,
        listCurrencies: [...state.listCurrencies, ...action.payload]
      };
    case DELETE_PAIR:
      return {
        ...state,
        listCurrencyPairs: [
          ...state.listCurrencyPairs.filter((item) => item.id !== action.payload)
        ]
      };
    case ADD_PAIR:
      return {
        ...state,
        listCurrencyPairs: [...state.listCurrencyPairs, ...action.payload]
      };
    default:
      return state;
  }
};

export default currencyStore;
