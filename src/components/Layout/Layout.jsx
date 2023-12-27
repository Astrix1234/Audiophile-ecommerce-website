import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { SectionAudioGear } from 'components/SectionAudioGear/SectionAudioGear';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <SectionAudioGear /> */}
      <Footer />
    </>
  );
};
