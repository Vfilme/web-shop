import React, { useEffect } from 'react';
import './counterBasketProducts.scss';
import { useDispatch } from 'react-redux';
import { IProductsBasket } from './types';
import { getCountArrayObjects } from '../../../entities/scripts/helperScripts';
import {
    ADD_PRODUCTS,
    REMOVE_PRODUCTS,
} from '../../../app/store/basket/basketSlice';
import { getLSData } from '../../../entities/components/helperScripts';
import { useTypedSelector } from '../../../app/store/hooks/hooks';

export const CounterBasketProducts: React.FC = () => {
    const listener = useTypedSelector(
        (state) => state.basket.listenerUpdateProducts,
    );
    const baksetProducts = useTypedSelector(
        (state) => state.basket.products,
    ) as Array<IProductsBasket>;
    const dispatch = useDispatch();
    useEffect(() => {
        if (getLSData('basket'))
            dispatch(ADD_PRODUCTS(getLSData('basket') as any));
        else {
            dispatch(REMOVE_PRODUCTS());
        }
    }, [listener]);
    return (
        <div
            className={`wrapperTotalCount ${getCountArrayObjects(baksetProducts) ? 'fullBasket' : 'emptyBasket'}`}
        >
            {getCountArrayObjects(baksetProducts)}
        </div>
    );
};
