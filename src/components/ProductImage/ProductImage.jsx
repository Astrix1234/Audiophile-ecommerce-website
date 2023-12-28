import React from 'react';

export const ProductImage = ({ name, imagePath }) => {
  let imageSrc;
  try {
    imageSrc = require(`${imagePath}`);
  } catch (error) {
    console.error('Unable to load image: ', error);
    imageSrc = null;
  }

  return <div>{imageSrc && <img src={imageSrc} alt={name} />}</div>;
};
