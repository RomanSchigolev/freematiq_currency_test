import React from 'react';

import CurrencyPairList from '../CurrencyPairList';
import CurrencyPairAddForm from '../CurrencyPairAddForm';

import styles from './CurrencyPairSection.module.scss';

const CurrencyPairSection = React.memo(function CurrencyPairSection({ currencies, cards }) {
  return (
    <section className={styles.section}>
      <header className={styles.section_header}>
        <h2 className={styles.section_title}>Валютные пары</h2>
      </header>
      <CurrencyPairAddForm currencies={currencies} />
      <CurrencyPairList cards={cards} />
    </section>
  );
});

export default CurrencyPairSection;
