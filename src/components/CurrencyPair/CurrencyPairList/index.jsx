import React from 'react';

import CurrencyPairCard from '../CurrencyPairCard';

import styles from './CurrencyPairList.module.scss';

function CurrencyPairList({ cards }) {
  return (
    <div>
      {cards.length ? (
        <ul className={styles.currencyPairsList}>
          {cards.map((card) => (
            <CurrencyPairCard key={card.id} {...card} />
          ))}
        </ul>
      ) : (
        <span>Список пустой. Добавьте валютную пару.</span>
      )}
    </div>
  );
}

export default CurrencyPairList;
