import React from 'react';
import scss from './Footer.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Logo } from 'components/Logo/Logo';
import { NavLinksFooter } from 'components/NavLinksFooter/NavLinksFooter';

export const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let footerStyle = scss.footer;
  let containerStyle = scss.footer__container;
  let containerSecondStyle = scss.footer__containerSecond;
  let containerThirdStyle = scss.footer__containerThird;
  let lineStyle = scss.footer__line;
  let containerForthStyle = scss.footer__containerForth;
  let aboutStyle = scss.footer__about;
  let copyrightStyle = scss.footer__copyright;

  if (isDesktop) {
    footerStyle += ` ${scss.footerDesktop}`;
    containerStyle += ` ${scss.footerDesktop__container}`;
    lineStyle += ` ${scss.footerDesktop__line}`;
    containerSecondStyle += ` ${scss.footerDesktop__containerSecond}`;
    containerThirdStyle += ` ${scss.footerDesktop__containerThird}`;
    containerForthStyle += ` ${scss.footerDesktop__containerForth}`;
    aboutStyle += ` ${scss.footerDesktop__about}`;
    copyrightStyle += ` ${scss.footerDesktop__copyright}`;
  } else if (isTablet) {
    footerStyle += ` ${scss.headerTablet}`;
    containerStyle += ` ${scss.footerTablet__container}`;
    lineStyle += ` ${scss.footerTablet__line}`;
    containerSecondStyle += ` ${scss.footerTablet__containerSecond}`;
    containerThirdStyle += ` ${scss.footerTablet__containerThird}`;
    containerForthStyle += ` ${scss.footerTablet__containerForth}`;
    aboutStyle += ` ${scss.footerTablet__about}`;
    copyrightStyle += ` ${scss.footerTablet__copyright}`;
  } else if (isMobile) {
    footerStyle += ` ${scss.footerMobile}`;
    containerStyle += ` ${scss.footerMobile__container}`;
    lineStyle += ` ${scss.footerMobile__line}`;
    containerSecondStyle += ` ${scss.footerMobile__containerSecond}`;
    containerThirdStyle += ` ${scss.footerMobile__containerThird}`;
    containerForthStyle += ` ${scss.footerMobile__containerForth}`;
    aboutStyle += ` ${scss.footerMobile__about}`;
    copyrightStyle += ` ${scss.footerMobile__copyright}`;
  }

  return (
    <header className={footerStyle}>
      <div className={containerStyle}>
        <div className={lineStyle}></div>

        <div className={containerSecondStyle}>
          <div className={containerThirdStyle}>
            <Logo />
            <p className={aboutStyle}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={containerForthStyle}>
            <NavLinksFooter />
          </div>
        </div>
        <p className={copyrightStyle}>Copyright 2021. All Rights Reserved</p>
      </div>
    </header>
  );
};
