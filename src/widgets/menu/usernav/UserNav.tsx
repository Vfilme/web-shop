import React from 'react';
import { Link } from 'react-router-dom';
import './usernav.scss';

export const UserNav: React.FC = () => {
    return (
        <>
            <ul className="userNav">
                <li>
                    <Link to="/user">
                        <img src="./images/user.png" alt="аккаунт" />
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        <img src="./images/search.png" alt="поиск" />
                    </Link>
                </li>
                <li>
                    <Link to="/basket">
                        <img src="./images/basket.png" alt="корзина" />
                    </Link>
                </li>
            </ul>
        </>
    );
};
