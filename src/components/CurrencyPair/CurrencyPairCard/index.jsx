import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCurrencyPair } from '../../../store/actions/currencyAction';

import { Close } from '@material-ui/icons';
import CurrencyFlag from 'react-currency-flags';

import styles from './CurrencyPairCard.module.scss';

function CurrencyPairCard({ id, fr: base, to: quoted, val: rate }) {
  const dispatch = useDispatch();
  const formatRate = (rate) => {
    return rate > 1 ? rate.toFixed(2) : rate.toPrecision(2);
  };

  return (
    <li className={styles.card}>
      <div className={styles.currency_pair_wrapper}>
        <div className={styles.base_currency}>
          <CurrencyFlag currency={base} size="md" />
          <span className={styles.currency_code}>{base}</span>
        </div>
        <div className={styles.quoted_currency}>
          <CurrencyFlag currency={quoted} size="md" />
          <span className={styles.currency_code}>{quoted}</span>
        </div>
      </div>
      <div className={styles.currency_pair_rate}>
        <span>{formatRate(rate)}</span>
      </div>
      <button
        type="button"
        aria-label="delete currency pair"
        className={styles.remove_currency_pair}
        onClick={() => dispatch(deleteCurrencyPair(id))}>
        <Close color="secondary" fontSize="small" />
      </button>
    </li>
  );
}

export default CurrencyPairCard;
