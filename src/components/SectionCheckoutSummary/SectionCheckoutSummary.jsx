import React, { useState, useCallback, useEffect, useContext } from 'react';
import scss from './SectionCheckoutSummary.module.scss';
import { DataContext } from 'components/App';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';
import { Summary } from 'components/Summary/Summary';
import { ModalThanks } from 'components/ModalThanks/ModalThanks';

export const SectionCheckoutSummary = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { products, refreshProducts } = useContext(DataContext);

  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionCheckoutSummaryStyle = scss.sectionCheckoutSummary;
  let containerStyle = scss.sectionCheckoutSummary__container;

  if (isDesktop) {
    sectionCheckoutSummaryStyle += ` ${scss.sectionCheckoutSummaryDesktop}`;
    containerStyle += ` ${scss.sectionCheckoutSummaryDesktop__container}`;
  } else if (isTablet) {
    sectionCheckoutSummaryStyle += ` ${scss.sectionCheckoutSummaryTablet}`;
    containerStyle += ` ${scss.sectionCheckoutSummaryTablet__container}`;
  } else if (isMobile) {
    sectionCheckoutSummaryStyle += ` ${scss.sectionCheckoutSummaryMobile}`;
    containerStyle += ` ${scss.sectionCheckoutSummaryMobile__container}`;
  }

  const thanksClasses = `${scss.sectionCheckoutSummary__thanks} ${
    !isOpened ? scss['is-hidden'] : ''
  }`;

  const toggleThanks = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const handleThanksClick = event => {
    if (event.currentTarget === event.target) {
      toggleThanks();
      navigate('/home');
      localStorage.removeItem('products');
      refreshProducts();
    }
  };

  useEffect(() => {
    const handleEscapeKeyThanks = event => {
      if (isOpened && event.key === 'Escape') {
        toggleThanks();
        navigate('/home');
        localStorage.removeItem('products');
        refreshProducts();
      }
    };
    if (isOpened) {
      document.addEventListener('keydown', handleEscapeKeyThanks);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyThanks);
    };
  }, [isOpened, toggleThanks, navigate, refreshProducts]);

  const formatPrice = price => {
    return `$ ${price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
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
    <section className={sectionCheckoutSummaryStyle}>
      <LinkGoBack />
      <form className={containerStyle}>
        <Summary
          onClick={toggleThanks}
          totalPrice={formatPrice(calculateTotalPrice(products))}
          grandTotal={formatPrice(calculateGrandTotal(products))}
          vat={formatPrice(calculateVat(products))}
          disabled={calculateTotalPrice(products) === 0}
        />
        <div className={thanksClasses} onClick={handleThanksClick}>
          <ModalThanks
            products={products}
            grandTotal={formatPrice(calculateGrandTotal(products))}
            button={'text'}
          />
        </div>
      </form>
    </section>
  );
};
