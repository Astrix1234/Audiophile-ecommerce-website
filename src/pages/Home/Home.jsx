import React from 'react';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionProductsHome } from 'components/SectionProductsHome/SectionProductsHome';
import { SectionMainHome } from 'components/SectionMainHome/SectionMainHome';

export default function Home() {
  return (
    <>
      <SectionMainHome />
      <SectionNavCategories />
      <SectionProductsHome />
    </>
  );
}
