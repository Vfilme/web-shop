import React, { useEffect } from 'react';
import './sideBar.scss';
import { PriceRange } from '../../../features/price-range/components/priceRange';
import { CategoryRange } from '../../../features/category-range/components/categoryRange';
import { useSearchParams } from 'react-router-dom';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../../app/store/filter/filterSlice';
import { Button } from '../../../shared/ui/button/Button';

export const SideBar: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const status = useTypedSelector((state) => state.filter.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
        } else {
            document.body.style.overflow = 'auto';
            document.body.style.position = 'static';
        }
    }, [status]);

    return (
        <div className={`container-side-bar ${status ? 'active-filter' : ''}`}>
            <div className="side-bar">
                <div className="hide-filter">
                    <Button
                        onClick={() => {
                            dispatch(setStatusFilter(false));
                        }}
                    >
                        hide filter
                    </Button>
                </div>

                {searchParams.toString() && (
                    <div
                        className="delete-params"
                        onClick={() => {
                            setSearchParams();
                        }}
                    >
                        reset everything
                    </div>
                )}
                <PriceRange />
                <CategoryRange />
            </div>
        </div>
    );
};
