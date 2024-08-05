import React from 'react';
import './basketPage.scss';
import { TotalBox } from '../../../widgets/basket/total-box/components/totalBox';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { EmptyBasket } from '../../../widgets/empty-basket';
import { CatalogBasket } from '../../../widgets/catalog-basket/components/catalogBasket';

export const BasketPage: React.FC = () => {
    const productsBasket = useTypedSelector((state) => state.basket.products);

    return (
        <div className="page-basket">
            <h1>Basket</h1>

            {productsBasket[0] ? (
                <div className="catalog-basket-layout">
                    <CatalogBasket />
                    <TotalBox />
                </div>
            ) : (
                <EmptyBasket />
            )}
        </div>
    );
};
