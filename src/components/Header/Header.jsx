import React, { useState } from 'react';
import scss from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { IconCard } from 'components/IconCard/IconCard';
import { IconMenu } from 'components/IconMenu/IconMenu';
import { NavLinksHeader } from 'components/NavLinksHeader/NavLinksHeader';
import { NavCategories } from 'components/NavCategories/NavCategories';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const [isOpened, setIsOpened] = useState(false);

  let headerStyle = scss.header;
  let containerStyle = scss.header__container;
  let menuStyle = scss.header__menu;

  if (isDesktop) {
    headerStyle += ` ${scss.headerDesktop}`;
    containerStyle += ` ${scss.headerDesktop__container}`;
  } else if (isTablet) {
    headerStyle += ` ${scss.headerTablet}`;
    containerStyle += ` ${scss.headerTablet__container}`;
    menuStyle += ` ${scss.headerTablet__menu}`;
  } else if (isMobile) {
    headerStyle += ` ${scss.headerMobile}`;
    containerStyle += ` ${scss.headerMobile__container}`;
    menuStyle += ` ${scss.headerMobile__menu}`;
  }

  const menuClasses = `${menuStyle} ${!isOpened ? scss['is-hidden'] : ''}`;

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  const openCart = () => {};

  return (
    <header className={headerStyle}>
      <div className={containerStyle}>
        {!isDesktop && <IconMenu onClick={toggleMenu} />}
        <Link to="/home">
          <Logo />
        </Link>
        {isDesktop && <NavLinksHeader />}
        <IconCard onClick={openCart} />
      </div>
      {!isDesktop && (
        <div className={menuClasses} onClick={handleMenuClick}>
          <NavCategories />
        </div>
      )}
    </header>
  );
};
