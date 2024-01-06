import React, { useEffect } from 'react';
import scss from './Checkout.module.scss';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

export const Checkout = ({ setFormValid, formik }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let checkoutStyle = scss.checkout;
  let titleStyle = scss.checkout__title;
  let inputsContainerMainStyle = scss.checkout__inputsContainerMain;
  let inputsContainerStyle = scss.checkout__inputsContainer;
  let inputsContainer2Style = scss.checkout__inputsContainer2;
  let inputsContainer3Style = scss.checkout__inputsContainer3;

  if (isDesktop) {
    checkoutStyle += ` ${scss.checkoutDesktop}`;
    titleStyle += ` ${scss.checkoutDesktop__title}`;
    inputsContainerMainStyle += ` ${scss.checkoutDesktop__inputsContainerMain}`;
    inputsContainerStyle += ` ${scss.checkoutDesktop__inputsContainer}`;
    inputsContainer2Style += ` ${scss.checkoutDesktop__inputsContainer2}`;
    inputsContainer3Style += ` ${scss.checkoutDesktop__inputsContainer3}`;
  } else if (isTablet) {
    checkoutStyle += ` ${scss.checkoutTablet}`;
    titleStyle += ` ${scss.checkoutTablet__title}`;
    inputsContainerMainStyle += ` ${scss.checkoutTablet__inputsContainerMain}`;
    inputsContainerStyle += ` ${scss.checkoutTablet__inputsContainer}`;
    inputsContainer2Style += ` ${scss.checkoutTablet__inputsContainer2}`;
  } else if (isMobile) {
    checkoutStyle += ` ${scss.checkoutMobile}`;
    titleStyle += ` ${scss.checkoutMobile__title}`;
    inputsContainerMainStyle += ` ${scss.checkoutMobile__inputsContainerMain}`;
    inputsContainerStyle += ` ${scss.checkoutMobile__inputsContainer}`;
    inputsContainer2Style += ` ${scss.checkoutMobile__inputsContainer2}`;
  }

  useEffect(() => {
    const anyFieldTouched = Object.values(formik.touched).some(t => t);
    const everyFieldTouched = Object.values(formik.touched).every(t => t);

    setFormValid(formik.isValid && everyFieldTouched && anyFieldTouched);
    // eslint-disable-next-line
  }, [formik.isValid, formik.touched, setFormValid]);

  return (
    <div className={checkoutStyle}>
      <h2 className={titleStyle}>Checkout</h2>
      <div className={inputsContainerMainStyle}>
        <div className={inputsContainerStyle}>
          <h4 className={scss.checkout__checkoutDescription}>
            billing details
          </h4>
          <div className={inputsContainer2Style}>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.name && formik.errors.name ? scss.errorLabel : ''
              }`}
              htmlFor="name"
            >
              Name
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.name && formik.errors.name
                    ? scss.errorInput
                    : ''
                }`}
                type="text"
                id="name"
                placeholder="Alexei Ward"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className={scss.formikMessage}>{formik.errors.name}</div>
              ) : null}
            </label>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.email && formik.errors.email
                  ? scss.errorLabel
                  : ''
              }`}
              htmlFor="email"
            >
              Email Address
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.email && formik.errors.email
                    ? scss.errorInput
                    : ''
                }`}
                type="email"
                id="email"
                placeholder="alexei@mail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={scss.formikMessage}>{formik.errors.email}</div>
              ) : null}
            </label>
          </div>
          <div className={inputsContainer3Style}>
            <label
              className={`${scss.checkout__label} ${
                formik.touched.phone && formik.errors.phone
                  ? scss.errorLabel
                  : ''
              }`}
              htmlFor="phone"
            >
              Phone Number
              <input
                className={`${scss.checkout__input} ${
                  formik.touched.phone && formik.errors.phone
                    ? scss.errorInput
                    : ''
                }`}
                type="tel"
                id="phone"
                placeholder="+1 202-555-0136"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={scss.formikMessage}>{formik.errors.phone}</div>
              ) : null}
            </label>
          </div>
        </div>
        <h4 className={scss.checkout__checkoutDescription}>shipping info</h4>
      </div>
      <h4 className={scss.checkout__checkoutDescription}>payment details</h4>
    </div>
  );
};

Checkout.propTypes = {
  setFormValid: PropTypes.func.isRequired,
  formik: PropTypes.object.isRequired,
};
