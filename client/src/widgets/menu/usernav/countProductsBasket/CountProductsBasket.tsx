import React, { useEffect } from 'react';
import './countProductsBasket';
import { useDispatch } from 'react-redux';
import {
    ADD_PRODUCTS,
    REMOVE_PRODUCTS,
} from '../../../../app/store/basket/basketSlice';
import { getLSData } from '../../../../pages/basket/modul';
import { useTypedSelector } from '../../../../app/store/hooks/hooks';
import { getCountArrayObjects } from '../../../../entities/scripts/helperScripts';
import { IProductsBasket } from './types';

export const CountProductsBasket: React.FC = () => {
    const listener = useTypedSelector(
        (state) => state.basket.listenerUpdateProducts,
    );
    const baksetProducts = useTypedSelector(
        (state) => state.basket.products,
    ) as Array<IProductsBasket>;
    const dispatch = useDispatch();
    useEffect(() => {
        if (getLSData('basket'))
            dispatch(
                ADD_PRODUCTS(getLSData('basket') as Array<IProductsBasket>),
            );
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
