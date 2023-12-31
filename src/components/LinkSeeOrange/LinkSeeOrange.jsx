import React from 'react';
import scss from './LinkSeeOrange.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeOrange = ({ id }) => {
  return (
    <>
      <Link className={scss.linkSee} to={`/product/${id}`}>
        See Product
      </Link>
    </>
  );
};
