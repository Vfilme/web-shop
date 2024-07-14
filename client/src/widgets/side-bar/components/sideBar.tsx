/* eslint-disable react/jsx-key */
import React from 'react';
import './sideBar.scss';
import { PriceRange } from '../../../features/price-range/components/priceRange';
import { CategoryRange } from '../../../features/category-range/CategoryRange';
import { useSearchParams } from 'react-router-dom';

export const SideBar: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="sideBarWrapper">
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
        </div>
    );
};
