import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { URLS } from '../../../entities/const/const';
import { IProducts } from '../../../app/store/catalog/types';
import { Pagination } from '../../../features/pagination/components/pagination';
import { ButtonLoadMore } from '../../../features/button-load-more';
import './catalog.scss';
import { CatalogCard } from '../../../entities/catalog-card/components/catalogCard';
import { boundAsyncActions } from '../../../app/store/index';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';

export const Catalog: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const products = useTypedSelector((state) => state.catalog.products);
    const [status, setStatus] = useState<boolean>(false);
    const { getProducts } = boundAsyncActions;

    const setProducts = async (urlParams = searchParams, type = 'get') => {
        const url = `${URLS.URL_SERVER}products/?${getURLParams(urlParams)}`;
        if (type == 'get') {
            getProducts(url);
        } else {
            getProducts(url);
        }
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
        setUpdate(true);
    }, [searchParams]);

    return (
        <div className="catalog">
            <div className="wrapper-products">
                {products.length ? (
                    (products as Array<IProducts>).map((el) => {
                        return <CatalogCard el={el} key={el.id} />;
                    })
                ) : (
                    <div className="cards">
                        <h2>Товара с такими критериями нет :{'('}</h2>
                    </div>
                )}
            </div>
            <div className="wrapper-pagination">
                <ButtonLoadMore fun={(update) => setUpdate(update)} />
                <Pagination fun={(update) => setUpdate(update)} />
            </div>
        </div>
    );
};
