import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { PRODUCTS, URLS } from '../../../shared/const/const';
import { Pagination } from '../../../features/pagination/components/pagination';
import { ButtonLoadMore } from '../../../features/button-load-more';
import './catalog.scss';
import { CatalogCard } from '../../../entities/catalog-card/components/catalogCard';
import { getURLParams } from '../../../shared/lib/helpers/getURLParams';
import { Buttons } from '../../../features/buttons-purchase';
import { CatalogBoundAsyncActions } from '../../../app/store/actions/catalogAsyncActions';
import { EStatusLoading } from '../../../shared/types/statusLoading';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../../app/store/filter/filterSlice';

export const Catalog: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const products = useTypedSelector((state) => state.catalog.products);
    const statusProducts = useTypedSelector((state) => state.catalog.status);
    const [status, setStatus] = useState<boolean>(false);
    const { getProducts } = CatalogBoundAsyncActions;
    const dispatch = useDispatch();

    const url = `${URLS.URL_SERVER}products/?${getURLParams(searchParams)}`;
    console.log(statusProducts);

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

    const loading = statusProducts == EStatusLoading.loading;
    const failed = statusProducts == EStatusLoading.failed;
    const empty =
        statusProducts == EStatusLoading.success && products.length == 0;
    return (
        <div className={`catalog ${loading ? 'loading-cards' : ''}`}>
            <button
                className="show-filter"
                onClick={() => {
                    dispatch(setStatusFilter(true));
                }}
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2860/2860208.png"
                    alt="show filter"
                />
            </button>
            <div className="wrapper-products">
                {products &&
                    products.map((el) => {
                        return (
                            <CatalogCard el={el} key={el.id}>
                                <Buttons id={el.id} />
                            </CatalogCard>
                        );
                    })}
            </div>
            <div>
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
