import React from 'react';
import scss from './LinkSeeOrange.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeOrange = ({ slug }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${slug}`}>
        See Product
      </Link>
    </>
  );
};
