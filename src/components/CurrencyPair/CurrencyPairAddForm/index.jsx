import React from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
  selectLabel: {
    fontSize: 14,
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

  const [firstCurrency, setFirstCurr] = React.useState('');
  const handleFirstCurr = (event) => {
    setFirstCurr(event.target.value);
  };

  const [secondCurrency, setSecondCurr] = React.useState('');
  const handleSecondCurr = (event) => {
    setSecondCurr(event.target.value);
  };

  const handleClickAddPair = () => {
    dispatch(fetchCurrencyPair(`${firstCurrency}_${secondCurrency}`));
    setFirstCurr('');
    setSecondCurr('');
  };

  return (
    <div className={styles.form_container}>
      <FormControl className={classes.formControlPair}>
        <InputLabel className={classes.selectLabel}>Базовая валюта</InputLabel>
        <Select value={firstCurrency} onChange={handleFirstCurr}>
          {currencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControlPair}>
        <InputLabel className={classes.selectLabel}>Котируемая валюта</InputLabel>
        <Select value={secondCurrency} onChange={handleSecondCurr}>
          {currencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
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
