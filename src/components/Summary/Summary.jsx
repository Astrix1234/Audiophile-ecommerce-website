import React, { useContext } from 'react';
import scss from './Summary.module.scss';
import { useMediaQuery } from 'react-responsive';
import { DataContext } from 'components/App';
import { CartProductsCheckout } from 'components/CartProductsCheckout/CartProductsCheckout';
import PropTypes from 'prop-types';

export const Summery = ({ onClick }) => {
  const { products } = useContext(DataContext);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let summeryStyle = scss.summery;

  if (isDesktop) {
    summeryStyle += ` ${scss.summeryDesktop}`;
  } else if (isTablet) {
    summeryStyle += ` ${scss.summeryTablet}`;
  } else if (isMobile) {
    summeryStyle += ` ${scss.summeryMobile}`;
  }

  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const calculateTotalPrice = cartProducts => {
    const prices = [];
    cartProducts.forEach(pr => {
      prices.push(pr.price * pr.count);
    });
    const price = prices.reduce((a, b) => a + b, 0);
    return price;
  };

  const calculateVat = cartProducts => {
    const price = calculateTotalPrice(cartProducts);
    const vat = price * 0.2;
    return vat;
  };

  const calculateGrandTotal = cartProducts => {
    const sum =
      calculateTotalPrice(cartProducts) + calculateVat(cartProducts) + 50;
    return sum;
  };

  return (
    <div className={summeryStyle}>
      <h4 className={scss.summery__title}>summary</h4>
      <CartProductsCheckout products={products} />
      <div className={scss.summery__totalPrice}>
        <p className={scss.summery__totalPriceText}>TOTAL</p>
        <p className={scss.summery__totalPricePrice}>
          $ {formatPrice(calculateTotalPrice(products))}
        </p>
      </div>
      <div className={scss.summery__shipping}>
        <p className={scss.summery__shippingText}>SHIPPING</p>
        <p className={scss.summery__shippingPrice}>$ 50</p>
      </div>
      <div className={scss.summery__vat}>
        <p className={scss.summery__vatText}>VAT (INCLUDED)</p>
        <p className={scss.summery__vatPrice}>
          $ {formatPrice(calculateVat(products))}
        </p>
      </div>
      <div className={scss.summery__grandTotal}>
        <p className={scss.summery__grandTotalText}>GRAND TOTAL</p>
        <p className={scss.summery__grandTotalPrice}>
          $ {formatPrice(calculateGrandTotal(products))}
        </p>
      </div>
      <button type="button" className={scss.summery__button} onClick={onClick}>
        CONTINUE
      </button>
    </div>
  );
};

Summery.propTypes = {
  onClick: PropTypes.func.isRequired,
};
