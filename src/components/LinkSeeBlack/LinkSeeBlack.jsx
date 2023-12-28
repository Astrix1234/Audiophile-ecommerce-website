import React from 'react';
import scss from './LinkSeeBlack.module.scss';
import { Link } from 'react-router-dom';

export const LinkSeeBlack = () => {
  return (
    <>
      <Link className={scss.linkSee} to="/product/:id">
        See Product
      </Link>
    </>
  );
};
