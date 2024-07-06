import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './cards';
import { cutSentence } from './module';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { getSSData } from '../../../entities/components/helperScripts';
import { IProducts } from '../../../app/store/catalog/types';
import { Link, useSearchParams } from 'react-router-dom';
import { getData } from '../../../app/store/catalog/actions';
import { Buttons } from './buttons/Buttons';

export const Cards: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNumber: number = useTypedSelector(
        (state) => state.catalog.pageNumber,
    );
    const actualPageNumber = getSSData('pageNumber');
    const products = useTypedSelector((state) => state.catalog.products);
    const repeatLoad = useTypedSelector((state) => state.catalog.repeatLoad);

    const dispatch = useDispatch();
    useEffect(() => {
        const minPrice = searchParams.get('minPrice') || '';
        const maxPrice = searchParams.get('maxPrice') || '';
        const categories = searchParams.get('categories') || '';
        dispatch(
            getData(
                actualPageNumber,
                `http://localhost:4000/products?minPrice=${minPrice}&maxPrice=${maxPrice}&categories=${categories}`,
            ),
        );
    }, [pageNumber, repeatLoad, searchParams]);

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
