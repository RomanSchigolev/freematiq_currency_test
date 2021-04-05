import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrencyList, addDefaultCurrencyPair } from './store/actions/currencyAction';

import CurrencyPairSection from './components/CurrencyPair/CurrencyPairSection';
import CurrencyConverterSection from './components/CurrencyConverter/CurrencyConverterSection';

import './styles/app.scss';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_CONVERT_URL}?apiKey=${process.env.REACT_APP_API_KEY}&q=USD_RUB,EUR_RUB`)
      .then((res) => res.json())
      .then((data) => {
        const objectDefaultCurrencyPair = data.results;
        const listDefaultCurrencyPairs = [];
        for (let key in objectDefaultCurrencyPair) {
          listDefaultCurrencyPairs.push({ ...objectDefaultCurrencyPair[key], isDefaultPair: true });
        }
        listDefaultCurrencyPairs.forEach((defaultPair) => {
          dispatch(addDefaultCurrencyPair(defaultPair));
        });
      })
      .catch((error) => {
        throw error;
      });
    dispatch(fetchCurrencyList());
  }, []);
  const { listCurrencyPairs, listCurrencies } = useSelector(({ currencyStore }) => currencyStore);

  return (
    <div className="app">
      <div className="container">
        <div className="containerSeparator">
          <CurrencyPairSection currencies={listCurrencies} cards={listCurrencyPairs} />
          <CurrencyConverterSection currencies={listCurrencies} />
        </div>
      </div>
    </div>
  );
};

export default App;
