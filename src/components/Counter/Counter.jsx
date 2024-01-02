import React from 'react';
import scss from './Counter.module.scss';

export const Counter = ({ count, plus, minus }) => {
  return (
    <div className={scss.counter}>
      <button className={scss.counter__button} onClick={minus}>
        -
      </button>
      <p className={scss.counter__count}>{count}</p>
      <button className={scss.counter__button} onClick={plus}>
        +
      </button>
    </div>
  );
};
