import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { DataContext } from 'components/App';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionAlsoLike } from 'components/SectionAlsoLike/SectionAlsoLike';
import { SectionProductDetails } from 'components/SectionProductDetails/SectionProductDetails';
import { SectionProductGallery } from 'components/SectionProductGallery/SectionProductGallery';

export default function Product() {
  const { slug } = useParams();
  const { data } = useContext(DataContext);

  const product = data.find(p => p.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Product-${slug}</title>
      </Helmet>
      <SectionProductDetails product={product} />
      <SectionProductGallery product={product} />
      <SectionAlsoLike product={product} />
      <SectionNavCategories />
    </>
  );
}
