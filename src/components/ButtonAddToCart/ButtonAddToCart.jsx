import React from 'react';
import scss from './ButtonAddToCart.module.scss';

export const ButtonAddToCart = ({ onClick }) => {
  return (
    <>
      <button className={scss.buttonAddToCart} onClick={onClick}>
        ADD TO CART
      </button>
    </>
  );
};
