import React from 'react';
import { AppRouter } from './Router';
import Menu from '../features/header/menu/Menu';
import './app.scss';

export const App: React.FC = () => {
    return (
        <>
            <Menu />
            <AppRouter />
        </>
    );
};
