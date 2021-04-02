import React from 'react';

import CurrencyConverterForm from '../CurrencyConverterForm';

import styles from './CurrencyConverterSection.module.scss';

const CurrencyConverterSection = React.memo(function CurrencyConverterSection({ currencies }) {
  return (
    <section className={styles.section}>
      <header className={styles.section_header}>
        <h2 className={styles.section_title}>Конвертер валют</h2>
      </header>
      <CurrencyConverterForm currencies={currencies} />
    </section>
  );
});
export default CurrencyConverterSection;
