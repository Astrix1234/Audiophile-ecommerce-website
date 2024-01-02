import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { DataContext } from 'components/App';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionAlsoLike } from 'components/SectionAlsoLike/SectionAlsoLike';
import { SectionProductDeteales } from 'components/SectionProductDeteales/SectionProductDeteales';

export default function Product() {
  const { slug } = useParams();
  const data = useContext(DataContext);

  const product = data.find(p => p.slug === slug);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Product-${slug}</title>
      </Helmet>
      <SectionProductDeteales product={product} />
      <SectionAlsoLike product={product} />
      <SectionNavCategories />
    </>
  );
}
