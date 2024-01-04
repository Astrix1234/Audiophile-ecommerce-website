import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionCheckoutSummary } from 'components/SectionCheckoutSummary/SectionCheckoutSummary';
export default function Checkout() {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <SectionCheckoutSummary />
    </>
  );
}
