import React from 'react';
import scss from './LinkSeeTransparent.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeTransparent = ({ slug }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${slug}`}>
        See Product
      </Link>
    </>
  );
};
