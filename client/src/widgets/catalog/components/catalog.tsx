import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { URLS } from '../../../shared/const/const';
import { IProducts } from '../../../app/store/catalog/types';
import { Pagination } from '../../../features/pagination/components/pagination';
import { ButtonLoadMore } from '../../../features/button-load-more';
import './catalog.scss';
import { CatalogCard } from '../../../entities/catalog-card/components/catalogCard';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';
import { Buttons } from '../../../features/buttons-purchase';
import { CatalogBoundAsyncActions } from '../../../app/store/actions/catalogAsyncActions';

export const Catalog: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const products = useTypedSelector((state) => state.catalog.products);
    const statusProducts = useTypedSelector((state) => state.catalog.status);
    const [status, setStatus] = useState<boolean>(false);
    const { getProducts } = CatalogBoundAsyncActions;
    const url = `${URLS.URL_SERVER}products/?${getURLParams(searchParams)}`;

    useEffect(() => {
        if (!status) {
            getProducts(url);
        }
        if (status && update) {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('page_number');
            setSearchParams(params);
            getProducts(url);
        }
        setStatus(true);
        setUpdate(true);
    }, [searchParams]);

    return (
        <div className="catalog">
            <div className="wrapper-products">
                {statusProducts == 'loading' && (
                    <div>Товар грузиться, подождите</div>
                )}
                {statusProducts == 'success' &&
                    (products as Array<IProducts>).map((el) => {
                        return (
                            <CatalogCard el={el} key={el.id}>
                                <Buttons id={el.id} />
                            </CatalogCard>
                        );
                    })}
                {statusProducts == 'failed' && (
                    <div>загрузка прошла неуспешно</div>
                )}

                {/* {products.length ? (
                    (products as Array<IProducts>).map((el) => {
                        return (
                            <CatalogCard el={el} key={el.id}>
                                <Buttons id={el.id} />
                            </CatalogCard>
                        );
                    })
                ) : (
                    <div className="cards">
                        <h2>Товара с такими критериями нет :{'('}</h2>
                    </div>
                )} */}
            </div>
            <div className="wrapper-pagination">
                <ButtonLoadMore fun={(update) => setUpdate(update)} />
                <Pagination fun={(update) => setUpdate(update)} />
            </div>
        </div>
    );
};
