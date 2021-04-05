import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCurrencyPair } from '../../../store/actions/currencyAction';

import { Close } from '@material-ui/icons';
import CurrencyFlag from 'react-currency-flags';

import styles from './CurrencyPairCard.module.scss';

function CurrencyPairCard({ isDefaultPair, id, fr: base, to: quoted, val: rate }) {
  const dispatch = useDispatch();
  const formatRate = (rate) => {
    return rate > 1 ? rate.toFixed(2) : rate.toPrecision(2);
  };

  return (
    <li className={styles.card}>
      <div className={styles.currencyPairWrapper}>
        <div className={styles.baseCurrency}>
          <CurrencyFlag currency={base} size="md" />
          <span className={styles.currencyCode}>{base}</span>
        </div>
        <div className={styles.quotedCurrency}>
          <CurrencyFlag currency={quoted} size="md" />
          <span className={styles.currencyCode}>{quoted}</span>
        </div>
      </div>
      <div className={styles.currencyPairRate}>
        <span>{formatRate(rate)}</span>
      </div>
      {isDefaultPair ? (
        ''
      ) : (
        <button
          type="button"
          aria-label="delete currency pair"
          className={styles.removeCurrencyPair}
          onClick={() => dispatch(deleteCurrencyPair(id))}>
          <Close color="secondary" fontSize="small" />
        </button>
      )}
    </li>
  );
}

export default CurrencyPairCard;
