import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CurrencyFlag from 'react-currency-flags';

import styles from './CurrencyConverterForm.module.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 100,
    margin: 0,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonForm: {
    alignSelf: 'flex-start',
    textTransform: 'none',
  },
  currencyFlag: {
    marginRight: 5,
  },
}));

const CurrencyConverterForm = React.memo(function CurrencyConverterForm({ currencies }) {
  const classes = useStyles();

  const [firstCurrency, setFirstCurrency] = React.useState('RUB');
  const handleFirstCurrency = (event) => {
    setFirstCurrency(event.target.value);
  };

  const [secondCurrency, setSecondCurrency] = React.useState('USD');
  const handleSecondCurrency = (event) => {
    setSecondCurrency(event.target.value);
  };

  const [amount, setAmount] = React.useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = React.useState(true);
  const [exchangeRate, setExchangeRate] = React.useState('');

  React.useEffect(() => {
    fetch(`https://free.currconv.com/api/v7/convert?apiKey=7b6c24ab30c7c034783a&q=${firstCurrency}_${secondCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.results[`${firstCurrency}_${secondCurrency}`]['val']);
      });
  }, [firstCurrency, secondCurrency]);

  const handleFromAmountChange = (event) => {
    setAmount(event.target.value);
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (event) => {
    setAmount(event.target.value);
    setAmountInFromCurrency(false);
  };

  let toAmount;
  let fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInputBox}>
        <FormControl className={classes.formControl}>
          <TextField type="number" label="Сумма" value={fromAmount} onChange={handleFromAmountChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.selectLabel}>Валюта</InputLabel>
          <Select value={firstCurrency} onChange={handleFirstCurrency}>
            {currencies.map((currency) => (
              <MenuItem key={currency.id} value={currency.id}>
                <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
                {currency.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={styles.formInputBox}>
        <FormControl className={classes.formControl}>
          <TextField type="number" label="Сумма" value={toAmount} onChange={handleToAmountChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.selectLabel}>Валюта</InputLabel>
          <Select value={secondCurrency} onChange={handleSecondCurrency}>
            {currencies.map((currency) => (
              <MenuItem key={currency.id} value={currency.id}>
                <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
                {currency.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
});

export default CurrencyConverterForm;
