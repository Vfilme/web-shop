import './pagination.scss';
import React, { useEffect, useState } from 'react';
import { IProps } from './types';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { URLS } from '../../../entities/const/const';
import { createMassiveFromNumber } from '../../../shared/lib/arrays/arrays';
import { boundAsyncActions } from '../../../app/store';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';

export const Pagination: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNumber: string = searchParams.get('page_number') || '1';
    const { getProducts, addProducts } = boundAsyncActions;

    const [countProducts, setCountProducts] = useState<number>(0);

    const setProducts = async (urlParams = searchParams, type = 'get') => {
        const url = `${URLS.URL_SERVER}products/?${getURLParams(urlParams)}`;
        if (type == 'get') {
            getProducts(url);
        } else {
            addProducts(url);
        }
        const response = await axios.get(url);
        setCountProducts(response.data);
    };

    useEffect(() => {
        const url = `${URLS.URL_SERVER}products/count/?${getURLParams(searchParams)}`;
        const fun = async () => {
            const response = await axios.get(url);
            setCountProducts(response.data);
            console.log('count products', countProducts);
        };
        fun();
    }, [searchParams]);
    const massive = createMassiveFromNumber(Math.floor(countProducts) / 4);

    return (
        <div className="pagination">
            {massive.length > 1 &&
                massive.map((el: number) => {
                    return (
                        <button
                            className={`${el == Number(pageNumber) && 'currentPage'}`}
                            key={el - 1}
                            onClick={() => {
                                console.log('to page');
                                fun(false);
                                const params = new URLSearchParams(
                                    searchParams.toString(),
                                );
                                params.set('page_number', `${el}`);
                                setSearchParams(params);
                                setProducts(params, 'get');
                            }}
                        >
                            {el}
                        </button>
                    );
                })}
        </div>
    );
};
