import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrencyPair, fetchCurrencyList } from './store/actions/currencyAction';

import CurrencyPairSection from './components/CurrencyPair/CurrencyPairSection';
import CurrencyConverterSection from './components/CurrencyConverter/CurrencyConverterSection';

import './styles/app.scss';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCurrencyPair());
    dispatch(fetchCurrencyList());
  }, []);
  const { listCurrencyPairs, listCurrencies } = useSelector(({ currencyStore }) => currencyStore);

  return (
    <div className="app">
      <div className="container">
        <div className="container__separator">
          <CurrencyPairSection currencies={listCurrencies} cards={listCurrencyPairs} />
          <CurrencyConverterSection currencies={listCurrencies} />
        </div>
      </div>
    </div>
  );
};

export default App;
