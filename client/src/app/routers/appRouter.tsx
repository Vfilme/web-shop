import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Layout } from '../layout';
import { CatalogPage } from '../../pages/catalog-page';
import { ProductPage } from '../../pages/product-page';
import { BasketPage } from '../../pages/basket-page';

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
