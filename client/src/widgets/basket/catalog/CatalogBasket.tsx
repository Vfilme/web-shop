import './catalogBasket';
import React from 'react';
import { CardBasket } from '../basket-cards/CardBasket';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';

export const CatalogBasket: React.FC = () => {
    const products = useTypedSelector((state) => state.basket.products);
    return (
        <div className="catalogBasket">
            {products.map((el) => {
                return <CardBasket {...el} key={el.id} />;
            })}
        </div>
    );
};
