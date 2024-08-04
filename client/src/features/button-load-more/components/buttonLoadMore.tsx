import React, { useEffect, useState } from 'react';
import { IProps } from './types';
import './buttonLoadMore.scss';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, URLS } from '../../../shared/const/const';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';
import { getCountProducts } from '../../../shared/api/getCountProducts';
import { CatalogBoundAsyncActions } from '../../../app/store/actions/catalogAsyncActions';

export const ButtonLoadMore: React.FC<IProps> = ({ fun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [countProducts, setCountProducts] = useState<number>(0);
    const pageNumber: string = searchParams.get('page_number') || '1';
    const { addProducts } = CatalogBoundAsyncActions;
    const needButton = Number(pageNumber) < countProducts / PRODUCTS.PAGE_SIZE;

    const updateProducts = async (urlParams = searchParams) => {
        const url = `${URLS.URL_SERVER}products/?${getURLParams(urlParams)}`;
        addProducts(url);
    };

    useEffect(() => {
        const setCount = async () => {
            const count = await getCountProducts(getURLParams(searchParams));
            setCountProducts(count);
        };
        setCount();
    }, [searchParams]);
    return (
        needButton && (
            <button
                className="button-load-more"
                onClick={() => {
                    fun(false);
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('page_number', `${Number(pageNumber) + 1}`);
                    setSearchParams(params);
                    updateProducts(params);
                }}
            >
                load more
            </button>
        )
    );
};
