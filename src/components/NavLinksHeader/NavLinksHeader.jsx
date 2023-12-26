import React from 'react';
import scss from './NavLinksHeader.module.scss';
import { Link } from 'react-router-dom';

export const NavLinksHeader = () => {
  return (
    <div className={scss.navLinksHeader}>
      <Link to="/home" className={scss.navLinksHeader__link}>
        HOME
      </Link>
      <Link to="/headphones" className={scss.navLinksHeader__link}>
        HEADPHONES
      </Link>
      <Link to="/speakers" className={scss.navLinksHeader__link}>
        SPEAKERS
      </Link>
      <Link to="/earphones" className={scss.navLinksHeader__link}>
        EARPHONES
      </Link>
    </div>
  );
};
