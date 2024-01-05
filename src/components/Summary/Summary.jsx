import React, { useContext } from 'react';
import scss from './Summary.module.scss';
import { useMediaQuery } from 'react-responsive';
import { DataContext } from 'components/App';
import { CartProductsCheckout } from 'components/CartProductsCheckout/CartProductsCheckout';
import PropTypes from 'prop-types';

export const Summary = ({ onClick, grandTotal, totalPrice, vat, disabled }) => {
  const { products } = useContext(DataContext);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let summaryStyle = scss.summary;

  if (isDesktop) {
    summaryStyle += ` ${scss.summaryDesktop}`;
  } else if (isTablet) {
    summaryStyle += ` ${scss.summaryTablet}`;
  } else if (isMobile) {
    summaryStyle += ` ${scss.summaryMobile}`;
  }

  return (
    <div className={summaryStyle}>
      <h4 className={scss.summary__title}>summary</h4>
      <CartProductsCheckout products={products} />
      <div className={scss.summary__totalPrice}>
        <p className={scss.summary__totalPriceText}>TOTAL</p>
        <p className={scss.summary__totalPricePrice}>{totalPrice}</p>
      </div>
      <div className={scss.summary__shipping}>
        <p className={scss.summary__shippingText}>SHIPPING</p>
        <p className={scss.summary__shippingPrice}>$ 50</p>
      </div>
      <div className={scss.summary__vat}>
        <p className={scss.summary__vatText}>VAT (INCLUDED)</p>
        <p className={scss.summary__vatPrice}>{vat}</p>
      </div>
      <div className={scss.summary__grandTotal}>
        <p className={scss.summary__grandTotalText}>GRAND TOTAL</p>
        <p className={scss.summary__grandTotalPrice}>{grandTotal}</p>
      </div>
      <button
        type="submit"
        className={scss.summary__button}
        onClick={onClick}
        disabled={disabled}
      >
        CONTINUE
      </button>
    </div>
  );
};

Summary.propTypes = {
  onClick: PropTypes.func.isRequired,
  grandTotal: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
