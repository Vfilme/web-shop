import './pagination.scss';
import React, { useEffect, useState } from 'react';
import { IProps } from './types';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, URLS } from '../../../shared/const/const';
import { createMassiveFromNumber } from '../../../shared/lib/arrays/arrays';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';
import { getCountProducts } from '../../../shared/api/getCountProducts';
import { CatalogBoundAsyncActions } from '../../../app/store/actions/catalogAsyncActions';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';

export const Pagination: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const products = useTypedSelector((state) => state.catalog.products);
    const pageNumber: string = searchParams.get('page_number') || '1';
    const { getProducts } = CatalogBoundAsyncActions;
    const [countProducts, setCountProducts] = useState<number>(0);
    const valuesButtons = createMassiveFromNumber(
        Math.floor(countProducts) / PRODUCTS.PAGE_SIZE,
    );

    const updateProducts = async (urlParams = searchParams) => {
        const url = `${URLS.URL_SERVER}products/?${getURLParams(urlParams)}`;
        getProducts(url);
    };

    useEffect(() => {
        const setCount = async () => {
            const count = await getCountProducts(getURLParams(searchParams));
            setCountProducts(count);
        };
        setCount();
    }, [searchParams]);

    return (
        <div className="pagination">
            {valuesButtons.length > 1 &&
                valuesButtons.map((el: number) => {
                    return (
                        <button
                            className={`${el == Number(pageNumber) && 'currentPage'}`}
                            key={el - 1}
                            onClick={() => {
                                fun(false);
                                const params = new URLSearchParams(
                                    searchParams.toString(),
                                );
                                params.set('page_number', `${el}`);
                                setSearchParams(params);
                                updateProducts(params);
                            }}
                        >
                            {el}
                        </button>
                    );
                })}
        </div>
    );
};
