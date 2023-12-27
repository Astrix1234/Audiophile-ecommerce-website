import React from 'react';
import scss from './NavLinksFooter.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

export const NavLinksFooter = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  let navLinksFooterStyle = scss.navLinksFooter;

  if (isMobile) {
    navLinksFooterStyle = ` ${scss.navLinksFooterMobile}`;
  }
  return (
    <div className={navLinksFooterStyle}>
      <Link to="/home" className={scss.navLinksFooter__link}>
        HOME
      </Link>
      <Link to="/headphones" className={scss.navLinksFooter__link}>
        HEADPHONES
      </Link>
      <Link to="/speakers" className={scss.navLinksFooter__link}>
        SPEAKERS
      </Link>
      <Link to="/earphones" className={scss.navLinksFooter__link}>
        EARPHONES
      </Link>
    </div>
  );
};
