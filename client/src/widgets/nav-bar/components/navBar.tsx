import React from 'react';
import './navBar.scss';
import { LogoNav } from '../../../entities/logoNav';
import { ListNav } from '../../../entities/listNav';
import { UserNav } from '../../../entities/userNav';
import { CounterBasketProducts } from '../../../features/counter-basket-products';

export const NavBar: React.FC = () => {
    return (
        <nav className="navBar">
            <LogoNav />
            <ListNav />
            <UserNav>
                <CounterBasketProducts />
            </UserNav>
        </nav>
    );
};
