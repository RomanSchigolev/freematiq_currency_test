import React from 'react';
import CurrencyFlag from 'react-currency-flags';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCurrencyPair, fetchCurrenciesPairs, fetchCurrencyList} from "./store/actions/currencyAction";

import './app.css';

const App = () => {
  // React.useEffect(() => {
  //   dispatch(fetchCurrencyList())
  // }, []);

  const dispatch = useDispatch();
  const {listCurrencyPairs, listCurrencies} = useSelector(({currencyStore}) => currencyStore);

  const [firstCurr, setFirstCurr] = React.useState({});
  const handleFirstCurr = (event) => {
    console.log(event.target.value);
    setFirstCurr(listCurrencies[event.target.value]);
  };

  const [secondCurr, setSecondCurr] = React.useState({});
  const handleSecondCurr = (event) => {
    setSecondCurr(listCurrencies[event.target.value]);
  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <div>
            <div>
              <h3>Добавить валютную пару</h3>
              <select
                value={listCurrencies.find(currency => currency.id === firstCurr)}
                onChange={handleFirstCurr}
              >
                {listCurrencies.map((currency, index) => (
                  <option
                    key={currency.id}
                    value={index}
                  >
                    {currency.id}
                  </option>
                ))
                }
              </select>
              <select
                value={listCurrencies.find(currency => currency.id === secondCurr)}
                onChange={handleSecondCurr}
              >
                {listCurrencies.map((currency, index) => (
                  <option
                    key={currency.id}
                    value={index}
                  >
                    {currency.id}
                  </option>
                ))
                }
              </select>
              <button onClick={() => dispatch(fetchCurrenciesPairs(firstCurr.id, secondCurr.id))}>
                Добавить
              </button>
            </div>
          </div>
          <ul style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {listCurrencyPairs && listCurrencyPairs.map((item) => (
              <li
                key={item.id}
                style={{textAlign: 'center', border: '1px solid black'}}
              >
                <div>
                  <CurrencyFlag
                    currency={item.fr}
                    size="md"
                  />
                  <span>{item.fr}</span>
                  <CurrencyFlag currency={item.to} size="md"/>
                  <span>{item.to}</span>
                </div>
                <div>
                  <span>{item.val.toPrecision(2)}</span>
                </div>
                <div>
                  <button onClick={() => dispatch(deleteCurrencyPair(item.id))}>
                    Delete
                  </button>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;