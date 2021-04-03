import React from 'react';

import CurrencyPairList from '../CurrencyPairList';
import CurrencyPairAddForm from '../CurrencyPairAddForm';

import styles from './CurrencyPairSection.module.scss';

const CurrencyPairSection = React.memo(function CurrencyPairSection({ currencies, cards }) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Валютные пары</h2>
      </header>
      <CurrencyPairAddForm currencies={currencies} />
      <CurrencyPairList cards={cards} />
    </section>
  );
});

export default CurrencyPairSection;
