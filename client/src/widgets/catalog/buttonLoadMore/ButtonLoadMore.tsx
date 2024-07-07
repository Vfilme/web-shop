import React, { useEffect, useState } from 'react';
import { Button } from '../../../shared/ui/button/Button';
import { useDispatch } from 'react-redux';
import { IProps } from './types';
import { addData, getData } from '../../../app/store/catalog/actions';
import './buttonLoadMore.scss';
import { useSearchParams } from 'react-router-dom';
import { URLS } from '../../../entities/const/const';
import axios from 'axios';

export const ButtonLoadMore: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const [countProducts, setCountProducts] = useState<number>(0);
    const pageNumber: string = searchParams.get('pageNumber') || '1';

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
        <div className="buttonLoadMore">
            {Number(pageNumber) < countProducts / 4 && (
                <button
                    onClick={() => {
                        fun(false);
                        const params = new URLSearchParams(
                            searchParams.toString(),
                        );
                        params.set('pageNumber', `${Number(pageNumber) + 1}`);
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
