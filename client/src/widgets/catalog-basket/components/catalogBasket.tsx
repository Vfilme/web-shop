import { useDispatch } from 'react-redux';
import { cleanBasket } from '../../../entities/button-basket/systemBasket';
import './catalogBasket.scss';
import React from 'react';
import { removeProducts } from '../../../app/store/basket/basketSlice';
import { CardBasket } from '../../../entities/basket-card/components/cardBasket';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';

export const CatalogBasket: React.FC = () => {
    const dispatch = useDispatch();
    const products = useTypedSelector((state) => state.basket.products);

    return (
        <div>
            <button
                className="del-products-basket"
                onClick={() => {
                    cleanBasket();
                    dispatch(removeProducts());
                }}
            >
                delete all
            </button>
            <div className="products-basket">
                {products.map((el) => {
                    return <CardBasket {...el} key={el.id} />;
                })}
            </div>
        </div>
    );
};
