import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/images/logo.png';
import './logoNav.scss';

export const LogoNav: React.FC = () => {
    return (
        <>
            <NavLink to={'/'} className="logo-nav">
                <img src="/images/logo.png" alt="логотип" />
            </NavLink>
        </>
    );
};
