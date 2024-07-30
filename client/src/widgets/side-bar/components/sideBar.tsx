import React from 'react';
import './sideBar.scss';
import { PriceRange } from '../../../features/price-range/components/priceRange';
import { CategoryRange } from '../../../features/category-range/components/categoryRange';
import { useSearchParams } from 'react-router-dom';

export const SideBar: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <div className="side-bar">
                {searchParams.toString() && (
                    <div
                        className="delete-params"
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
