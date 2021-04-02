import React from 'react';

import CurrencyPairCard from '../CurrencyPairCard';

import styles from './CurrencyPairList.module.scss';

const CurrencyPairList = ({ cards }) => {
  return (
    <div>
      {' '}
      {cards.length ? (
        <ul className={styles.currency_pairs_list}>
          {cards.map((card) => (
            <CurrencyPairCard key={card.id} {...card} />
          ))}
        </ul>
      ) : (
        <span>Список пустой. Добавьте валютную пару.</span>
      )}
    </div>
  );
};

export default CurrencyPairList;
