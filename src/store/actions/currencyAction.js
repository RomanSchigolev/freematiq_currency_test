import axios from 'axios';
import { ADD_PAIR, DELETE_PAIR, CURRENCY_SET } from './types';

export const fetchCurrenciesPairs = (pair = 'USD_RUB,EUR_RUB') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_CONVERT_URL, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          q: `${pair}`,
        },
      });
      const objectSourceCurrencyPair = response.data.results;
      const listCurrencyPairs = [];
      for (let key in objectSourceCurrencyPair) {
        listCurrencyPairs.push(objectSourceCurrencyPair[key]);
      }
      dispatch(addCurrencyPair(listCurrencyPairs));
    } catch (error) {
      throw error;
    }
  };
};

export const fetchCurrencyList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_CURRENCIES_URL, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
        },
      });
      const objectSourceCurrencies = response.data.results;
      const listCurrencies = [];
      for (let key in objectSourceCurrencies) {
        listCurrencies.push(objectSourceCurrencies[key]);
      }
      dispatch(setListCurrencies(listCurrencies));
    } catch (error) {
      throw error;
    }
  };
};

// export const setCurrencyPair = (data) => ({
//   type: SET_CURRENCIES,
//   payload: data
// });

export const deleteCurrencyPair = (index) => ({
  type: DELETE_PAIR,
  payload: index,
});

export const addCurrencyPair = (currencyPair) => ({
  type: ADD_PAIR,
  payload: currencyPair,
});

export const setListCurrencies = (currencies) => ({
  type: CURRENCY_SET,
  payload: currencies,
});
