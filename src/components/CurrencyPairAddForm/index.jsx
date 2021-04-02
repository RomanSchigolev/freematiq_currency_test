import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { AddCircle } from '@material-ui/icons/';

import CurrencyFlag from 'react-currency-flags';

import { fetchCurrencyList } from '../../store/actions/currencyAction';
import { fetchCurrenciesPairs } from '../../store/actions/currencyAction';

import styles from './CurrencyPairAddForm.module.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
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

const CurrencyPairAddForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(fetchCurrencyList());
  // }, []);
  const { listCurrencies } = useSelector(({ currencyStore }) => currencyStore);

  const [firstCurrency, setFirstCurr] = React.useState('');
  const handleFirstCurr = (event) => {
    setFirstCurr(event.target.value);
  };

  const [secondCurrency, setSecondCurr] = React.useState('');
  const handleSecondCurr = (event) => {
    setSecondCurr(event.target.value);
  };

  return (
    <div className={styles.form_container}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.selectLabel} id="demo-simple-select-label">
          Базовая валюта
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={firstCurrency}
          onChange={handleFirstCurr}>
          {listCurrencies.map((currency) => (
            <MenuItem key={currency.id} value={currency.id}>
              <CurrencyFlag currency={currency.id} size="md" className={classes.currencyFlag} />
              {currency.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.selectLabel} id="demo-simple-select-label">
          Котируемая валюта
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={secondCurrency}
          onChange={handleSecondCurr}>
          {listCurrencies.map((currency) => (
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
        onClick={() => dispatch(fetchCurrenciesPairs(`${firstCurrency}_${secondCurrency}`))}>
        Добавить пару
      </Button>
    </div>
  );
};

export default CurrencyPairAddForm;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     width: 180,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   selectLabel: {
//     fontSize: 14,
//   },
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// }));

// const CurrencyPairAddForm = () => {
// const classes = useStyles();
// const [age, setAge] = React.useState('');

// const handleChange = (event) => {
//   setAge(event.target.value);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
// };

//   return (
// <div>
//   <form onSubmit={handleSubmit}>
//     <div className={classes.formContainer}>
// <FormControl className={classes.formControl}>
//   <InputLabel className={classes.selectLabel} id="demo-simple-select-label">
//     Базовая валюта
//   </InputLabel>
//   <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
//     <MenuItem value={10}>Ten</MenuItem>
//     <MenuItem value={20}>Twenty</MenuItem>
//     <MenuItem value={30}>Thirty</MenuItem>
//   </Select>
// </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel className={classes.selectLabel} id="demo-simple-select-label">
//           Котируемая валюта
//         </InputLabel>
//         <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//<button type="submit" aria-label="add new currency pair" className={styles.button_add_pair}>
//<span className={styles.button_add_pair_text}>Добавить пару</span>
//<AddCircle fontSize="small" />
//</button>
//     <input type="submit" value="Добавить" />
//   </form>
// </div>
//   );
// };

// export default CurrencyPairAddForm;
