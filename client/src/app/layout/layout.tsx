import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../widgets/nav-bar';
import { Footer } from '../../widgets/footer';
import './layout.scss';

export const Layout: React.FC = () => {
    return (
        <div className="layout">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};
