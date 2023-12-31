import React from 'react';
import { useParams } from 'react-router-dom';
import { SectionCategoryTitle } from 'components/SectionCategoryTitle/SectionCategoryTitle';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionProducts } from 'components/SectionProducts/SectionProducts';

export default function Category() {
  const { categoryName } = useParams();

  return (
    <>
      <SectionCategoryTitle title={categoryName} />
      <SectionProducts category={categoryName} />
      <SectionNavCategories />
    </>
  );
}
