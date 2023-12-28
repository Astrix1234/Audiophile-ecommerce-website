import React from 'react';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionProductsHome } from 'components/SectionProductsHome/SectionProductsHome';

export default function Home() {
  return (
    <>
      <SectionNavCategories />
      <SectionProductsHome />
    </>
  );
}
