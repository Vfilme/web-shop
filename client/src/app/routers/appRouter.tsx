import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { BasketPage } from '../../pages/basket/BasketPage';
import { Layout } from '../layout';
import { CatalogPage } from '../../pages/catalog-page';
import { ProductPage } from '../../pages/product-page';

export const AppRouter = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <CatalogPage />,
            },
            {
                path: '/basket',
                element: <BasketPage />,
            },
            {
                path: '/product/:productId',
                element: <ProductPage />,
            },
        ],
    },
]);
