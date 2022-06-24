import React from 'react';

const HomeContainer = React.lazy(() => import('./modules/home/home.container'));
const ResultsContainer = React.lazy(() => import('./modules/results/results.container'));
const ProductDetailContainer = React.lazy(() => import('./modules/product-detail/product-detail.container'));

export const routes = [
  // Home Page
  {
    exact: true,
    path: '/',
    view: HomeContainer,
  },
  // Results Page
  {
    exact: true,
    path: '/items',
    view: ResultsContainer,
  },
  // Product's Detail Page
  {
    exact: true,
    path: '/items/:id',
    view: ProductDetailContainer,
  },
];
