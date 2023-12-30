import React from 'react';
import { SectionCategoryTitle } from 'components/SectionCategoryTitle/SectionCategoryTitle';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionProductsHeadphones } from 'components/SectionProductsHeadphones/SectionProductsHeadphones';

export default function Headphones() {
  return (
    <>
      <SectionCategoryTitle title="Headphones" />
      <SectionProductsHeadphones />
      <SectionNavCategories />
    </>
  );
}
