import React from 'react';
import scss from './SectionProductDeteales.module.scss';
import { useMediaQuery } from 'react-responsive';
import { nanoid } from 'nanoid';
import { ButtonAddToCart } from 'components/ButtonAddToCart/ButtonAddToCart';

export const SectionProductDeteales = ({ product }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionProductsStyle = scss.sectionProducts;
  let containerStyle = scss.sectionProducts__container;
  let productContainerStyle = scss.sectionProducts__productContainer;
  let imageStyle = scss.sectionProducts__image;
  let textContainerStyle = scss.sectionProducts__textContainer;
  let titleStyle = scss.sectionProducts__title;
  let descriptionStyle = scss.sectionProducts__description;
  let newStyle = scss.sectionProducts__new;
  let priceStyle = scss.sectionProducts__price;
  let detealesContainerStyles = scss.sectionProducts__detealesContainer;
  let featuresStyle = scss.sectionProducts__features;
  let featuresTitleStyle;
  let boxStyles = scss.sectionProducts__box;
  let boxTitleStyle = scss.sectionProducts__boxTitle;
  let boxItemStyles = scss.sectionProducts__boxItem;

  if (isDesktop) {
    sectionProductsStyle += ` ${scss.sectionProductsDesktop}`;
    containerStyle += ` ${scss.sectionProductsDesktop__container}`;
    productContainerStyle += ` ${scss.sectionProductsDesktop__productContainer}`;
    imageStyle += ` ${scss.sectionProductsDesktop__image}`;
    textContainerStyle += ` ${scss.sectionProductsDesktop__textContainer}`;
    titleStyle += ` ${scss.sectionProductsDesktop__title}`;
    descriptionStyle += ` ${scss.sectionProductsDesktop__description}`;
    newStyle += ` ${scss.sectionProductsDesktop__new}`;
    priceStyle += ` ${scss.sectionProductsDesktop__price}`;
    detealesContainerStyles += ` ${scss.sectionProductsDesktop__detealesContainer}`;
    featuresStyle += ` ${scss.sectionProductsDesktop__features}`;
    featuresTitleStyle = ` ${scss.sectionProductsDesktop__featuresTitle}`;
    boxStyles += ` ${scss.sectionProductsDesktop__box}`;
    boxTitleStyle += ` ${scss.sectionProductsDesktop__boxTitle}`;
    boxItemStyles += ` ${scss.sectionProductsDesktop__boxItem}`;
  } else if (isTablet) {
    sectionProductsStyle += ` ${scss.sectionProductsTablet}`;
    containerStyle += ` ${scss.sectionProductsTablet__container}`;
    productContainerStyle += ` ${scss.sectionProductsTablet__productContainer}`;
    imageStyle += ` ${scss.sectionProductsTablet__image}`;
    textContainerStyle += ` ${scss.sectionProductsTablet__textContainer}`;
    titleStyle += ` ${scss.sectionProductsTablet__title}`;
    descriptionStyle += ` ${scss.sectionProductsTablet__description}`;
    newStyle += ` ${scss.sectionProductsTablet__new}`;
    priceStyle += ` ${scss.sectionProductsTablet__price}`;
    detealesContainerStyles += ` ${scss.sectionProductsTablet__detealesContainer}`;
    featuresStyle += ` ${scss.sectionProductsTablet__features}`;
    featuresTitleStyle = ` ${scss.sectionProductsTablet__featuresTitle}`;
    boxStyles += ` ${scss.sectionProductsTablet__box}`;
    boxTitleStyle += ` ${scss.sectionProductsTablet__boxTitle}`;
    boxItemStyles += ` ${scss.sectionProductsTablet__boxItem}`;
  } else if (isMobile) {
    sectionProductsStyle += ` ${scss.sectionProductsMobile}`;
    containerStyle += ` ${scss.sectionProductsMobile__container}`;
    productContainerStyle += ` ${scss.sectionProductsMobile__productContainer}`;
    imageStyle += ` ${scss.sectionProductsMobile__image}`;
    textContainerStyle += ` ${scss.sectionProductsMobile__textContainer}`;
    titleStyle += ` ${scss.sectionProductsMobile__title}`;
    descriptionStyle += ` ${scss.sectionProductsMobile__description}`;
    newStyle += ` ${scss.sectionProductsMobile__new}`;
    priceStyle += ` ${scss.sectionProductsMobile__price}`;
    detealesContainerStyles += ` ${scss.sectionProductsMobile__detealesContainer}`;
    featuresStyle += ` ${scss.sectionProductsMobile__features}`;
    featuresTitleStyle = ` ${scss.sectionProductsMobile__featuresTitle}`;
    boxStyles += ` ${scss.sectionProductsMobile__box}`;
    boxTitleStyle += ` ${scss.sectionProductsMobile__boxTitle}`;
    boxItemStyles += ` ${scss.sectionProductsMobile__boxItem}`;
  }

  return (
    <section className={sectionProductsStyle}>
      <div className={containerStyle}>
        <div className={productContainerStyle}>
          <div className={`${scss[product.slug]} ${imageStyle}`}></div>
          <div className={textContainerStyle}>
            {product.new && <div className={newStyle}>new product</div>}
            <h4 className={titleStyle}>{product.name}</h4>
            <p className={descriptionStyle}>{product.description}</p>
            <p className={priceStyle}>$ {product.price}</p>
            <ButtonAddToCart />
          </div>
        </div>
        <div className={detealesContainerStyles}>
          <div className={featuresStyle}>
            <h4 className={featuresTitleStyle}>FEATURES</h4>
            <p
              className={scss.sectionProducts__featuresDescription}
              dangerouslySetInnerHTML={{ __html: product.features }}
            ></p>
          </div>
          <div className={boxStyles}>
            <h4 className={boxTitleStyle}>in the box</h4>
            <div className={scss.sectionProducts__boxIncludes}>
              {product.includes.map(item => (
                <div className={boxItemStyles} key={nanoid()}>
                  <p className={scss.sectionProducts__boxItemQuantity}>
                    {item.quantity}x
                  </p>
                  <p className={scss.sectionProducts__boxItemText}>
                    {item.item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
