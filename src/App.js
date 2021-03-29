import CurrencyFlag from 'react-currency-flags';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounterAction, increaseСounterAction } from './store/reducers/counterReducer';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }) => counter.value);

  const increaseСounter = (number) => {
    dispatch(increaseСounterAction(number));
  };

  const decreaseCounter = (number) => {
    dispatch(decreaseCounterAction(number));
  };

  return (
    <div className="App">
      <CurrencyFlag currency="EUR" size="xl" />
      <h1>Hello, World!</h1>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => increaseСounter(Number(prompt()))}>inc</button>
        <span style={{ fontSize: '2vmax', margin: '0 20px' }}>{value}</span>
        <button onClick={() => decreaseCounter(Number(prompt()))}>dec</button>
      </div>
    </div>
  );
}

export default App;
