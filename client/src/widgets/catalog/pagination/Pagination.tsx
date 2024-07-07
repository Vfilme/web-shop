/* eslint-disable react/jsx-key */
import './pagination';
import React, { useEffect, useState } from 'react';
import { createMassiveFromNumber } from '../../../shared/scripts/arrays/arrays';
import { URLS } from '../../../entities/const/const';
import { useDispatch } from 'react-redux';
import { IProps } from './types';
import { useSearchParams } from 'react-router-dom';
import { addData, getData } from '../../../app/store/catalog/actions';
import axios from 'axios';

export const Pagination: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const pageNumber: string = searchParams.get('pageNumber') || '1';

    const [countProducts, setCountProducts] = useState<number>(0);

    const getURLParams = (urlParams = searchParams) => {
        let url = '';
        const params: any = {};
        urlParams.forEach((value, key) => {
            url += `${key}=${value}&`;
            params[key] = value;
        });
        return url;
    };

    const setProducts = async (urlParams = searchParams, type = 'getData') => {
        if (type == 'getData') {
            console.log('get data');
            dispatch(
                getData(
                    `${URLS.URL_SERVER}products/?${getURLParams(urlParams)}`,
                ),
            );
        } else {
            console.log('add data');
            console.log(pageNumber);
            dispatch(
                addData(
                    `${URLS.URL_SERVER}products/?${getURLParams(urlParams)}`,
                ),
            );
        }
        const response = await axios.get(
            `${URLS.URL_SERVER}products/count/?${getURLParams()}`,
        );
        setCountProducts(response.data);
        console.log('count products', countProducts);
    };

    useEffect(() => {
        const fun = async () => {
            const response = await axios.get(
                `${URLS.URL_SERVER}products/count/?${getURLParams()}`,
            );
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
                                fun(false); // setUpdata(false); !
                                const params = new URLSearchParams(
                                    searchParams.toString(),
                                );
                                params.set('pageNumber', `${el}`);
                                setSearchParams(params);
                                setProducts(params, 'getData');
                            }}
                        >
                            {el}
                        </button>
                    );
                })}
        </div>
    );
};
