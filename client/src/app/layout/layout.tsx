import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../widgets/nav-bar';
import { Footer } from '../../widgets/footer';
import './layout.scss';
import { MobileMenu } from '../../widgets/mobile-nav-bar/components/mobileMenu';

export const Layout: React.FC = () => {
    return (
        <div className="layout">
            <NavBar />
            <Outlet />
            <Footer />
            <MobileMenu />
        </div>
    );
};
