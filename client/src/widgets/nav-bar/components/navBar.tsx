import React, { useEffect, useState } from 'react';
import './navBar.scss';
import { LogoNav } from '../../../entities/logoNav';
import { ListNav } from '../../../entities/listNav';
import { UserNav } from '../../../entities/userNav';
import { CounterBasketProducts } from '../../../features/counter-basket-products';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';

export const NavBar: React.FC = () => {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [directionScroll, setDirectionScroll] = useState<'up' | 'down'>('up');
    const status = useTypedSelector((state) => state.filter.status);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const dirScroll = lastScrollTop > scrollTop ? 'up' : 'down';
            setDirectionScroll(dirScroll);
            setLastScrollTop(scrollTop);
        };
        window.addEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    const upScroll = directionScroll == 'up' || lastScrollTop < 80;
    return (
        <>
            <nav
                className={`nav-bar ${upScroll ? 'up-scroll' : ''} ${status ? 'active-filter' : ''}`}
            >
                <LogoNav />
                <ListNav />
                <div className="container-user-nav">
                    <UserNav>
                        <CounterBasketProducts />
                    </UserNav>
                </div>
            </nav>
        </>
    );
};
