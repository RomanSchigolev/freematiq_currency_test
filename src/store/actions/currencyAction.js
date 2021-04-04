// API - https://free.currencyconverterapi.com/

import axios from 'axios';
import { ADD_CURRENCY_PAIR, DELETE_CURRENCY_PAIR, GET_CURRENCIES } from './types';

export const fetchCurrencyPair = (pair = 'USD_RUB,EUR_RUB') => {
  return async (dispatch) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_CONVERT_URL, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          q: pair,
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
      listCurrencies.sort((a, b) => (a.id > b.id ? 1 : -1));
      dispatch(setListCurrencies(listCurrencies));
    } catch (error) {
      throw error;
    }
  };
};

export const deleteCurrencyPair = (index) => ({
  type: DELETE_CURRENCY_PAIR,
  payload: index,
});

export const addCurrencyPair = (currencyPair) => ({
  type: ADD_CURRENCY_PAIR,
  payload: currencyPair,
});

export const setListCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});
