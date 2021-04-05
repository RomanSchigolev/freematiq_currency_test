import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { AddCircle } from '@material-ui/icons/';
import CurrencyFlag from 'react-currency-flags';

import { fetchCurrencyPair } from '../../../store/actions/currencyAction';

import styles from './CurrencyPairAddForm.module.scss';

const useStyles = makeStyles((theme) => ({
  formControlPair: {
    margin: theme.spacing(1),
    width: 180,
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

const CurrencyPairAddForm = React.memo(function CurrencyPairAddForm({ currencies }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [firstCurrency, setFirstCurrency] = React.useState('');
  const handleFirstCurrency = (event) => {
    setFirstCurrency(event.target.value);
  };

  const [secondCurrency, setSecondCurrency] = React.useState('');
  const handleSecondCurrency = (event) => {
    setSecondCurrency(event.target.value);
  };

  const [error, setError] = React.useState(false);

  const handleClickAddPair = () => {
    if (firstCurrency && secondCurrency) {
      dispatch(fetchCurrencyPair(`${firstCurrency}_${secondCurrency}`));
      setFirstCurrency('');
      setSecondCurrency('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <FormControl className={classes.formControlPair}>
        <InputLabel className={classes.selectLabel}>Базовая валюта</InputLabel>
        <Select value={firstCurrency} onChange={handleFirstCurrency}>
          {currencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
        {error ? <FormHelperText error={true}>Выберите валюту</FormHelperText> : ''}
      </FormControl>
      <FormControl className={classes.formControlPair}>
        <InputLabel className={classes.selectLabel}>Котируемая валюта</InputLabel>
        <Select value={secondCurrency} onChange={handleSecondCurrency}>
          {currencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
        {error ? <FormHelperText error={true}>Выберите валюту</FormHelperText> : ''}
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonForm}
        endIcon={<AddCircle fontSize="small" />}
        onClick={handleClickAddPair}>
        Добавить пару
      </Button>
    </div>
  );
});

export default CurrencyPairAddForm;
