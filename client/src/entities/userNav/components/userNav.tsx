import React from 'react';
import { Link } from 'react-router-dom';
import './userNav.scss';
// import { CountProductsBasket } from './countProductsBasket/CountProductsBasket';
import '../assets/images/search.png';
import '../assets/images/user.png';
import '../assets/images/basket.png';

interface IUserNavProps {
    children: JSX.Element;
}

export const UserNav: React.FC<IUserNavProps> = ({ children }) => {
    return (
        <>
            <ul className="user-nav">
                <li>
                    <Link to="/user">
                        <img src="/images/user.png" alt="аккаунт" />
                    </Link>
                    <div className="login"></div>
                </li>
                <li>
                    <Link to="/search">
                        <img src="/images/search.png" alt="поиск" />
                    </Link>
                </li>
                <li>
                    <Link to="/basket">
                        <img src="/images/basket.png" alt="корзина" />
                        {children}
                    </Link>
                </li>
            </ul>
        </>
    );
};
