import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { addData, getData } from '../../../app/store/catalog/actions';
import { URLS } from '../../../entities/const/const';
import axios from 'axios';
import { IProducts } from '../../../app/store/catalog/types';
import { cutSentence } from '../../../entities/cards/module';
import { Buttons } from '../../../entities/cards/buttons/Buttons';
import { Pagination } from '../../../features/pagination/components/pagination';
import { ButtonLoadMore } from '../../../features/button-load-more';

import './catalog.scss';

export const Catalog: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(true);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const products = useTypedSelector((state) => state.catalog.products);
    const pageNumber: string = searchParams.get('page_number') || '1';
    const [status, setStatus] = useState<boolean>(false);
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
        if (!status) {
            setProducts();
        }
        if (status && update) {
            console.log('set page number 1');
            const params = new URLSearchParams(searchParams.toString());
            params.delete('page_number');
            setSearchParams(params);
            setProducts();
        }
        setStatus(true);
        setUpdate(true); //setUpdate(true);
    }, [searchParams]);

    const setPageNumber = (type: string, number?: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (type == 'loadMore')
            params.set('page_number', `${Number(pageNumber) + 1}`);
        else {
            params.set('page_number', `${number}`);
        }
        return params;
    };

    return (
        <div className="catalog">
            {products.length ? (
                (products as Array<IProducts>).map((el) => {
                    return (
                        <div className="cards" key={el.id}>
                            <Link to={`/product/${el.id}`}>
                                <img src={el.image} alt={el.title} />
                            </Link>
                            <div>
                                <h2>{cutSentence(el.title, 5, 40)}</h2>
                                <h4>{el.category}</h4>
                                <p>${el.price.toFixed(2)}</p>
                                <Buttons product={el} />
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="cards">
                    <h2>Товара с такими критериями нет :{'('}</h2>
                </div>
            )}
            <div className="wrapper-pagination">
                <ButtonLoadMore fun={(update) => setUpdate(update)} />
                <Pagination fun={(update) => setUpdate(update)} />
            </div>
        </div>
    );
};
