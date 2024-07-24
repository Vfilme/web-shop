import React, { useEffect, useState } from 'react';
import { IProps } from './types';
import './buttonLoadMore.scss';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { URLS } from '../../../entities/const/const';
import { boundAsyncActions } from '../../../app/store';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';

export const ButtonLoadMore: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [countProducts, setCountProducts] = useState<number>(0);
    const pageNumber: string = searchParams.get('page_number') || '1';
    const { getProducts, addProducts } = boundAsyncActions;

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
        };
        fun();
    }, [searchParams]);
    return (
        Number(pageNumber) < countProducts / 4 && (
            <button
                className="button-load-more"
                onClick={() => {
                    fun(false);
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('page_number', `${Number(pageNumber) + 1}`);
                    setSearchParams(params);
                    setProducts(params, 'add');
                }}
            >
                load more
            </button>
        )
    );
};
