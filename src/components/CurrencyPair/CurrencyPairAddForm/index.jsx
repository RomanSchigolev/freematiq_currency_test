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

import { fetchNewCurrencyPair } from '../../../store/actions/currencyAction';

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
  const { listCurrencyPairs } = useSelector(({ currencyStore }) => currencyStore);

  const [currencyPair, setCurrencyPair] = React.useState({
    fr: '',
    to: '',
  });

  const handleFirstCurrency = (event) => {
    setCurrencyPair({ ...currencyPair, fr: event.target.value });
  };

  const handleSecondCurrency = (event) => {
    setCurrencyPair({ ...currencyPair, to: event.target.value });
  };

  const [errorWithEmptySelectors, setErrorWithEmptySelectors] = React.useState(false);
  const [errorWhenAddingExistingPair, setErrorWhenAddingExistingPair] = React.useState(false);

  const isErrorWhenAddingExistingPair = (listing, pair) => {
    return listing.some((item) => item.fr === pair.fr && item.to === pair.to);
  };

  const handleClickAddPair = () => {
    if (currencyPair.fr !== '' && currencyPair.to !== '') {
      if (isErrorWhenAddingExistingPair(listCurrencyPairs, currencyPair)) {
        setErrorWhenAddingExistingPair(true);
      } else {
        dispatch(fetchNewCurrencyPair(currencyPair));
        currencyPair.fr = '';
        currencyPair.to = '';
        setErrorWhenAddingExistingPair(false);
      }
    } else {
      setErrorWithEmptySelectors(true);
    }
  };

  return (
    <div className={styles.formContainer}>
      <FormControl className={classes.formControlPair}>
        <InputLabel className={classes.selectLabel}>Базовая валюта</InputLabel>
        <Select value={currencyPair.fr} onChange={handleFirstCurrency} onOpen={() => setErrorWithEmptySelectors(false)}>
          {currencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
        {errorWithEmptySelectors ? <FormHelperText error={true}>Выберите валюту</FormHelperText> : ''}
      </FormControl>
      <FormControl className={classes.formControlPair}>
        <InputLabel className={classes.selectLabel}>Котируемая валюта</InputLabel>
        <Select
          value={currencyPair.to}
          onChange={handleSecondCurrency}
          onOpen={() => setErrorWithEmptySelectors(false)}>
          {currencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
        {errorWithEmptySelectors ? <FormHelperText error={true}>Выберите валюту</FormHelperText> : ''}
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonForm}
        endIcon={<AddCircle fontSize="small" />}
        onClick={handleClickAddPair}>
        Добавить пару
      </Button>
      {errorWhenAddingExistingPair ? <FormHelperText error={true}>Такая валютная пара уже есть.</FormHelperText> : ''}
    </div>
  );
});

export default CurrencyPairAddForm;
