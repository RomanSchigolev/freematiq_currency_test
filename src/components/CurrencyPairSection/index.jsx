import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrenciesPairs } from '../../store/actions/currencyAction';

import CurrencyPairList from '../CurrencyPairList';
import CurrencyPairAddForm from '../CurrencyPairAddForm';

import styles from './CurrencyPairSection.module.scss';

const CurrencyPairSection = () => {
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(fetchCurrenciesPairs());
  // }, []);
  const { listCurrencyPairs } = useSelector(({ currencyStore }) => currencyStore);

  return (
    <section className={styles.section}>
      <header className={styles.section_header}>
        <h2 className={styles.section_title}>Валютные пары</h2>
      </header>
      <CurrencyPairAddForm />
      <CurrencyPairList cards={listCurrencyPairs} />
    </section>
  );
};

export default CurrencyPairSection;
