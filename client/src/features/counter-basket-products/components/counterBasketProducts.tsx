import React, { useEffect } from 'react';
import './counterBasketProducts.scss';
import { useDispatch } from 'react-redux';
import { IProductsBasket } from './types';
import { getCountArrayObjects } from '../../../entities/scripts/helperScripts';
import {
    addProductsBasket,
    removeProducts,
} from '../../../app/store/basket/basketSlice';
import { getLSData } from '../../../entities/components/helperScripts';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';

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
            dispatch(addProductsBasket(getLSData('basket') as any));
        else {
            dispatch(removeProducts());
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
