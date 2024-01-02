import React from 'react';
import scss from './LinkSeeBlack.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeBlack = ({ slug }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${slug}`}>
        See Product
      </Link>
    </>
  );
};
