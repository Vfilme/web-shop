import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './cards';
import { cutSentence } from './module';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { IProducts } from '../../../app/store/catalog/types';
import { Link, useSearchParams } from 'react-router-dom';
import { addData, getData } from '../../../app/store/catalog/actions';
import { Buttons } from './buttons/Buttons';
import { URLS } from '../../../entities/const/const';
import axios from 'axios';

interface IProps {
    update: boolean;
    fun: (update: boolean) => void;
}

export const Cards: React.FC<IProps> = ({ update, fun }) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const products = useTypedSelector((state) => state.catalog.products);
    const pageNumber: string = searchParams.get('pageNumber') || '1';
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
            params.delete('pageNumber');
            setSearchParams(params);
            setProducts();
        }
        setStatus(true);
        fun(true); //setUpdate(true);
    }, [searchParams]);

    const setPageNumber = (type: string, number?: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (type == 'loadMore')
            params.set('pageNumber', `${Number(pageNumber) + 1}`);
        else {
            params.set('pageNumber', `${number}`);
        }
        return params;
    };

    return products.length ? (
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
    );
};
