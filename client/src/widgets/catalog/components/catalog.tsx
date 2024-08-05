import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { URLS } from '../../../shared/const/const';
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

    const loading = statusProducts == 'loading';
    const success = statusProducts == 'success' && products.length != 0;
    const failed = statusProducts == 'failed';
    const empty = statusProducts == 'success' && products.length == 0;
    return (
        <div className="catalog">
            <div className="wrapper-products">
                {success &&
                    products.map((el) => {
                        return (
                            <CatalogCard el={el} key={el.id}>
                                <Buttons id={el.id} />
                            </CatalogCard>
                        );
                    })}
            </div>
            <div>
                {loading && <div>The product is being loaded</div>}
                {failed && (
                    <div>
                        <h2>
                            An error occurred with the connection. Please check
                            your internet connection and try again
                        </h2>
                    </div>
                )}
                {empty && (
                    <div>
                        <h2>
                            Unfortunately, we could not find the product
                            according to your request
                        </h2>
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
