import React from 'react';
import { Close } from '@material-ui/icons/';
import CurrencyFlag from 'react-currency-flags';
import { useDispatch, useSelector } from 'react-redux';
// import {deleteCurrencyPair, fetchCurrenciesPairs, fetchCurrencyList} from "./store/actions/currencyAction";

import './styles/app.scss';

const App = () => {
  // React.useEffect(() => {
  //   dispatch(fetchCurrencyList())
  // }, []);

  const dispatch = useDispatch();
  const { listCurrencyPairs, listCurrencies } = useSelector(({ currencyStore }) => currencyStore);

  const [firstCurr, setFirstCurr] = React.useState({});
  const handleFirstCurr = (event) => {
    setFirstCurr(listCurrencies[event.target.value]);
  };

  const [secondCurr, setSecondCurr] = React.useState({});
  const handleSecondCurr = (event) => {
    setSecondCurr(listCurrencies[event.target.value]);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="container__divider">
          <div className="currencyPairsWidget">
            <h2 className="currencyPairsWidget__title">Курс валютных пар</h2>
            <ul className="currencyPairsWidget__listing">
              <li className="currencyPairsWidget__item">
                <div className="currencyPairsWidget__pair">
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="USD" size="md" />
                    <span className="currencyPairsWidget__currency-label">USD</span>
                  </div>
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="RUB" size="md" />
                    <span className="currencyPairsWidget__currency-label">RUB</span>
                  </div>
                </div>
                <div className="currencyPairsWidget__value">
                  <span>75.98</span>
                </div>
                <button className="currencyPairsWidget__remove-pair">
                  <Close color="secondary" fontSize="small" />
                </button>
              </li>
              <li className="currencyPairsWidget__item">
                <div className="currencyPairsWidget__pair">
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="UAH" size="md" />
                    <span className="currencyPairsWidget__currency-label">USD</span>
                  </div>
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="RUB" size="md" />
                    <span className="currencyPairsWidget__currency-label">RUB</span>
                  </div>
                </div>
                <div className="currencyPairsWidget__value">
                  <span>2.98</span>
                </div>
                <button className="currencyPairsWidget__remove-pair">
                  <Close color="secondary" fontSize="small" />
                </button>
              </li>
              <li className="currencyPairsWidget__item">
                <div className="currencyPairsWidget__pair">
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="EUR" size="md" />
                    <span className="currencyPairsWidget__currency-label">USD</span>
                  </div>
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="RUB" size="md" />
                    <span className="currencyPairsWidget__currency-label">RUB</span>
                  </div>
                </div>
                <div className="currencyPairsWidget__value">
                  <span>88.98</span>
                </div>
                <button className="currencyPairsWidget__remove-pair">
                  <Close color="secondary" fontSize="small" />
                </button>
              </li>
              <li className="currencyPairsWidget__item">
                <div className="currencyPairsWidget__pair">
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="GBP" size="md" />
                    <span className="currencyPairsWidget__currency-label">USD</span>
                  </div>
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="RUB" size="md" />
                    <span className="currencyPairsWidget__currency-label">RUB</span>
                  </div>
                </div>
                <div className="currencyPairsWidget__value">
                  <span>113</span>
                </div>
                <button className="currencyPairsWidget__remove-pair">
                  <Close color="secondary" fontSize="small" />
                </button>
              </li>
              <li className="currencyPairsWidget__item">
                <div className="currencyPairsWidget__pair">
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="AUD" size="md" />
                    <span className="currencyPairsWidget__currency-label">USD</span>
                  </div>
                  <div className="currencyPairsWidget__currency">
                    <CurrencyFlag currency="KRW" size="md" />
                    <span className="currencyPairsWidget__currency-label">RUB</span>
                  </div>
                </div>
                <div className="currencyPairsWidget__value">
                  <span>0.98</span>
                </div>
                <button className="currencyPairsWidget__remove-pair">
                  <Close color="secondary" fontSize="small" />
                </button>
              </li>
            </ul>
          </div>
          <div className="currencyConverterWidget">
            <h2>two</h2>
          </div>
        </div>
      </div>
      {/*<div>*/}
      {/*  <div>*/}
      {/*    <div>*/}
      {/*      <h3>Добавить валютную пару</h3>*/}
      {/*      <select*/}
      {/*        value={listCurrencies.find(currency => currency.id === firstCurr)}*/}
      {/*        onChange={handleFirstCurr}*/}
      {/*      >*/}
      {/*        {listCurrencies.map((currency, index) => (*/}
      {/*          <option*/}
      {/*            key={currency.id}*/}
      {/*            value={index}*/}
      {/*          >*/}
      {/*            {currency.id}*/}
      {/*          </option>*/}
      {/*        ))*/}
      {/*        }*/}
      {/*      </select>*/}
      {/*      <select*/}
      {/*        value={listCurrencies.find(currency => currency.id === secondCurr)}*/}
      {/*        onChange={handleSecondCurr}*/}
      {/*      >*/}
      {/*        {listCurrencies.map((currency, index) => (*/}
      {/*          <option*/}
      {/*            key={currency.id}*/}
      {/*            value={index}*/}
      {/*          >*/}
      {/*            {currency.id}*/}
      {/*          </option>*/}
      {/*        ))*/}
      {/*        }*/}
      {/*      </select>*/}
      {/*      <button onClick={() => dispatch(fetchCurrenciesPairs(firstCurr.id, secondCurr.id))}>*/}
      {/*        Добавить*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <ul style={{display: 'flex', justifyContent: 'space-evenly'}}>*/}
      {/*    {listCurrencyPairs && listCurrencyPairs.map((item) => (*/}
      {/*      <li*/}
      {/*        key={item.id}*/}
      {/*        style={{textAlign: 'center', border: '1px solid black'}}*/}
      {/*      >*/}
      {/*        <div>*/}
      {/*          <CurrencyFlag*/}
      {/*            currency={item.fr}*/}
      {/*            size="md"*/}
      {/*          />*/}
      {/*          <span>{item.fr}</span>*/}
      {/*          <CurrencyFlag currency={item.to} size="md"/>*/}
      {/*          <span>{item.to}</span>*/}
      {/*        </div>*/}
      {/*        <div>*/}
      {/*          <span>{item.val.toPrecision(2)}</span>*/}
      {/*        </div>*/}
      {/*        <div>*/}
      {/*          <button onClick={() => dispatch(deleteCurrencyPair(item.id))}>*/}
      {/*            Delete*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*      </li>*/}
      {/*    ))*/}
      {/*    }*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
};

export default App;
