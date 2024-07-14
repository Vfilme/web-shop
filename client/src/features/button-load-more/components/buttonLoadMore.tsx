import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { IProps } from './types';

import './buttonLoadMore.scss';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import { addData, getData } from '../../../app/store/catalog/actions';
import { URLS } from '../../../entities/const/const';

export const ButtonLoadMore: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [countProducts, setCountProducts] = useState<number>(0);
    const pageNumber: string = searchParams.get('page_number') || '1';

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
    return (
        <div className="button-load-more">
            {Number(pageNumber) < countProducts / 4 && (
                <button
                    onClick={() => {
                        fun(false);
                        const params = new URLSearchParams(
                            searchParams.toString(),
                        );
                        params.set('page_number', `${Number(pageNumber) + 1}`);
                        setSearchParams(params);
                        setProducts(params, 'addData');
                    }}
                >
                    load more
                </button>
            )}
        </div>
    );
};
