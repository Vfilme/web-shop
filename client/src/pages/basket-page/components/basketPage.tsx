import React from 'react';
import './basketPage.scss';
import { TotalBox } from '../../../widgets/basket/total-box/components/totalBox';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { EmptyBasket } from '../../../widgets/empty-basket';
import { CatalogBasket } from '../../../widgets/catalog-basket/components/catalogBasket';
import { EStatusLoading } from '../../../shared/types/statusLoading';

export const BasketPage: React.FC = () => {
    const products = useTypedSelector((state) => state.basket.products);
    const status = useTypedSelector((state) => state.basket.status);

    return (
        <div className="page-basket">
            <h1>Basket</h1>

            {products.length != 0 && (
                <div className="catalog-basket-layout">
                    <CatalogBasket />
                    <TotalBox />
                </div>
            )}
            {status == EStatusLoading.success && products.length == 0 && (
                <EmptyBasket />
            )}
            {status == EStatusLoading.loading && products.length == 0 && (
                <div>loading products...</div>
            )}
        </div>
    );
};
