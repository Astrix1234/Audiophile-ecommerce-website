import React, { useState, useCallback, useEffect } from 'react';
import scss from './SectionCheckoutSummary.module.scss';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';
import { Summery } from 'components/Summary/Summary';

export const SectionCheckoutSummary = () => {
  const [isOpened, setIsOpened] = useState(false);

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
    }
  };

  useEffect(() => {
    const handleEscapeKeyThanks = event => {
      if (isOpened && event.key === 'Escape') {
        toggleThanks();
        navigate('/home');
      }
    };
    if (isOpened) {
      document.addEventListener('keydown', handleEscapeKeyThanks);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyThanks);
    };
  }, [isOpened, toggleThanks, navigate]);

  return (
    <section className={sectionCheckoutSummaryStyle}>
      <LinkGoBack />
      <div className={containerStyle}>
        <Summery onClick={toggleThanks} />
        <div className={thanksClasses} onClick={handleThanksClick}></div>
      </div>
    </section>
  );
};
