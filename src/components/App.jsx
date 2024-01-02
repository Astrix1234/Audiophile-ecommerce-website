// import React, { useState, lazy, useEffect } from 'react';
import React, { createContext, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import data from '../data.json';

const Home = lazy(() => import('../pages/Home/Home'));
const Category = lazy(() => import('../pages/category/Category'));
const Product = lazy(() => import('../pages/Product/Product'));
const Checkout = lazy(() => import('../pages/Checkout/Checkout'));

export const DataContext = createContext();

export const App = () => {
  return (
    <DataContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </DataContext.Provider>
  );
};
