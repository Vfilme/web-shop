import React from 'react';
import './styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { AppRouter } from './routers';

export const App: React.FC = () => {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={AppRouter} />
            </Provider>
        </>
    );
};
