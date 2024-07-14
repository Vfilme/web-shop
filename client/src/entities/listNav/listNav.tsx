import React from 'react';
import { NavLink } from 'react-router-dom';
import './listNav.scss';

export const ListNav: React.FC = () => {
    return (
        <>
            <ul className="list-nav">
                <li>
                    <NavLink to={'/'}>Catalog</NavLink>
                </li>
                <li>
                    About
                    <ul>
                        <li>
                            <NavLink to="/product4">product1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product5">product1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product6">product1</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    Something
                    <ul>
                        <li>
                            <NavLink to="/product7">product1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product8">product1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product8">product1</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};
