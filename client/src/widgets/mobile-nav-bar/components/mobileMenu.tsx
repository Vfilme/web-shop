import { LogoNav } from '../../../entities/logoNav';
import { UserNav } from '../../../entities/userNav';
import { CounterBasketProducts } from '../../../features/counter-basket-products';
import './mobileMenu.scss';
import React from 'react';

export const MobileMenu: React.FC = () => {
    return (
        <nav className="mobile-menu">
            <LogoNav />
            <UserNav>
                <CounterBasketProducts />
            </UserNav>
        </nav>
    );
};
