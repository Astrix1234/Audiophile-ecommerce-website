import React from 'react';
import scss from './LinkSeeBlack.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeBlack = ({ id }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${id}`}>
        See Product
      </Link>
    </>
  );
};
