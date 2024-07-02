/* eslint-disable react/jsx-key */
import React from 'react';
import './sideBar.scss';
import { PriceRange } from './widgets/priceRange/PriceRange';
import { CategoryRange } from './widgets/categoryRange/CategoryRange';
import { useSearchParams } from 'react-router-dom';

export const SideBar: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="sideBar">
            {searchParams.toString() && (
                <div
                    className="deleteParams"
                    onClick={() => {
                        setSearchParams();
                    }}
                >
                    Сбросить все
                </div>
            )}
            <PriceRange />
            <CategoryRange />
        </div>
    );
};
