import React from 'react';
import scss from './SectionCheckoutSummary.module.scss';
import { useMediaQuery } from 'react-responsive';
import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';
import { Summery } from 'components/Summary/Summary';

export const SectionCheckoutSummary = () => {
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
  return (
    <section className={sectionCheckoutSummaryStyle}>
      <LinkGoBack />
      <div className={containerStyle}>
        <Summery />
      </div>
    </section>
  );
};
