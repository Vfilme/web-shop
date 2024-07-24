import React from 'react';
import './basketpage.scss';
import { TotalBox } from '../../widgets/basket/total-box/TotalBox';
import { CatalogBasket } from '../../widgets/basket/catalog/CatalogBasket';
import { BackLink } from '../../entities/components/ui/button/BackLink';
import { useTypedSelector } from '../../app/store/hooks/useTypedSelector';

export const BasketPage: React.FC = () => {
    const productsBasket = useTypedSelector((state) => state.basket.products);

    return (
        <div className="pageBasket">
            <h1>Корзина</h1>
            {productsBasket[0] ? (
                <div className="prdouctsBasketWrapper">
                    <CatalogBasket products={productsBasket} />
                    <TotalBox />
                </div>
            ) : (
                <div className="emptyBasket">
                    <p>Ваша корзина пуста {':('}</p>
                    <BackLink />
                </div>
            )}
        </div>
    );
};
