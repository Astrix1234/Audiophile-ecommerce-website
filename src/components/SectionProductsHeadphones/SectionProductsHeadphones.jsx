import React, { useContext } from 'react';
import scss from './SectionProductsHeadphones.module.scss';
import { useMediaQuery } from 'react-responsive';
import { DataContext } from 'components/App';
import { LinkSeeOrange } from 'components/LinkSeeOrange/LinkSeeOrange';

export const SectionProductsHeadphones = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionProductsHeadphonesStyle = scss.sectionProductsHeadphones;
  let containerStyle = scss.sectionProductsHeadphones__container;
  let productContainerStyle = scss.sectionProductsHeadphones__productContainer;
  let imageStyle = scss.sectionProductsHeadphones__image;
  let textContainerStyle = scss.sectionProductsHeadphones__textContainer;
  let titleStyle = scss.sectionProductsHeadphones__title;
  let descriptionStyle = scss.sectionProductsHeadphones__description;

  if (isDesktop) {
    sectionProductsHeadphonesStyle += ` ${scss.sectionProductsHeadphonesDesktop}`;
    containerStyle += ` ${scss.sectionProductsHeadphonesDesktop__container}`;
    productContainerStyle += ` ${scss.sectionProductsHeadphonesDesktop__productContainer}`;
    imageStyle += ` ${scss.sectionProductsHeadphonesDesktop__image}`;
    textContainerStyle += ` ${scss.sectionProductsHeadphonesDesktop__textContainer}`;
    titleStyle += ` ${scss.sectionProductsHeadphonesDesktop__title}`;
    descriptionStyle += ` ${scss.sectionProductsHeadphonesDesktop__description}`;
  } else if (isTablet) {
    sectionProductsHeadphonesStyle += ` ${scss.sectionProductsHeadphonesTablet}`;
    containerStyle += ` ${scss.sectionProductsHeadphonesTablet__container}`;
    productContainerStyle += ` ${scss.sectionProductsHeadphonesTablet__productContainer}`;
    imageStyle += ` ${scss.sectionProductsHeadphonesTablet__image}`;
    textContainerStyle += ` ${scss.sectionProductsHeadphonesTablet__textContainer}`;
    titleStyle += ` ${scss.sectionProductsHeadphonesTablet__title}`;
    descriptionStyle += ` ${scss.sectionProductsHeadphonesTablet__description}`;
  } else if (isMobile) {
    sectionProductsHeadphonesStyle += ` ${scss.sectionProductsHeadphonesMobile}`;
    containerStyle += ` ${scss.sectionProductsHeadphonesMobile__container}`;
    productContainerStyle += ` ${scss.sectionProductsHeadphonesMobile__productContainer}`;
    imageStyle += ` ${scss.sectionProductsHeadphonesMobile__image}`;
    textContainerStyle += ` ${scss.sectionProductsHeadphonesMobile__textContainer}`;
    titleStyle += ` ${scss.sectionProductsHeadphonesMobile__title}`;
    descriptionStyle += ` ${scss.sectionProductsHeadphonesMobile__description}`;
  }

  const data = useContext(DataContext);
  const productsInCategory = data
    .filter(product => product.category === 'headphones')
    .reverse();
  console.log(productsInCategory);

  return (
    <section className={sectionProductsHeadphonesStyle}>
      <div className={containerStyle}>
        {productsInCategory.map((product, index) => (
          <div
            className={`${productContainerStyle} ${
              index % 2 !== 0 ? scss.reversed : ''
            }`}
            key={product.id}
          >
            <div className={`product-${product.slug} ${imageStyle}`}></div>
            <div className={textContainerStyle}>
              <h4 className={titleStyle}>{product.name}</h4>
              <p className={descriptionStyle}>{product.description}</p>
              <LinkSeeOrange />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
