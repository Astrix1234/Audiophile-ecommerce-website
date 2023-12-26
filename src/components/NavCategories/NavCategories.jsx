import React from 'react';
import scss from './NavCategories.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import headphonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export const NavCategories = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let navCategoriesStyle = scss.navCategories;
  let itemStyle = scss.navCategories__item;
  let pictureStyle = scss.navCategories__picture;

  if (isDesktop) {
    navCategoriesStyle += ` ${scss.navCategoriesDesktop}`;
    itemStyle += ` ${scss.navCategoriesDesktop__item}`;
    pictureStyle += ` ${scss.navCategoriesDesktop__picture}`;
  } else if (isTablet) {
    navCategoriesStyle += ` ${scss.navCategoriesTablet}`;
    itemStyle += ` ${scss.navCategoriesTablet__item}`;
    pictureStyle += ` ${scss.navCategoriesTablet__picture}`;
  } else if (isMobile) {
    navCategoriesStyle += ` ${scss.navCategoriesMobile}`;
    itemStyle += ` ${scss.navCategoriesMobile__item}`;
    pictureStyle += ` ${scss.navCategoriesMobile__picture}`;
  }

  return (
    <div className={navCategoriesStyle}>
      <div className={itemStyle}>
        <img className={pictureStyle} src={headphonesImage} alt="headphones" />
        <p>HEADPHONES</p>
        <Link to="/headphones" className={scss.navCategories__link}>
          SHOP
        </Link>
      </div>

      <div className={itemStyle}>
        <img className={pictureStyle} src={speakersImage} alt="headphones" />
        <Link to="/speakers" className={scss.navCategories__link}>
          SHOP
        </Link>
      </div>

      <div className={itemStyle}>
        <img className={pictureStyle} src={earphonesImage} alt="headphones" />
        <Link to="/earphones" className={scss.navCategories__link}>
          SHOP
        </Link>
      </div>
    </div>
  );
};
