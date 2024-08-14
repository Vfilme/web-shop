import { useSearchParams } from 'react-router-dom';
import './customerParams.scss';
import React from 'react';
import { getCustomerCategoreis } from '../module/getCustomerCategories';
import { deleteParam } from '../module/deleteParam';

export const CustomerParams: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const minPrice = searchParams.get('min_price');
    const maxPrice = searchParams.get('max_price');

    return (
        <div className="customer-params">
            <p>Yours params</p>
            <div className="container-params">
                {getCustomerCategoreis(searchParams).map((e: any) => {
                    return (
                        <button
                            onClick={() => {
                                deleteParam(e, searchParams, setSearchParams);
                            }}
                        >
                            {e}
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
                                alt="delele param"
                            />
                        </button>
                    );
                })}
                {searchParams.has('min_price') && (
                    <button
                        onClick={() => {
                            const paramsPrice = new URLSearchParams(
                                searchParams.toString(),
                            );
                            paramsPrice.delete('min_price');
                            paramsPrice.delete('max_price');
                            setSearchParams(paramsPrice);
                        }}
                    >
                        Price: {minPrice} - {maxPrice}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
                            alt="delele param"
                        />
                    </button>
                )}
            </div>
        </div>
    );
};
