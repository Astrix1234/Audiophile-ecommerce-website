import React from 'react';
import scss from './LinkSeeTransparent.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeTransparent = ({ id }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${id}`}>
        See Product
      </Link>
    </>
  );
};
