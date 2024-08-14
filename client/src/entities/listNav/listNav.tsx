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
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    Something else
                    <ul>
                        <li>
                            <NavLink to="">something</NavLink>
                        </li>
                        <li>
                            <NavLink to="">something</NavLink>
                        </li>
                        <li>
                            <NavLink to="">something</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};
