import React, { useEffect } from 'react';
import './counterBasketProducts.scss';
import { useDispatch } from 'react-redux';
import { IProductsBasket } from './types';
import { getCountArrayObjects } from '../../../shared/lib/helpers/getCountArrayObjects';
import {
    addProductsBasket,
    removeProducts,
    setStatusBasket,
} from '../../../app/store/basket/basketSlice';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { getLSData } from '../../../entities/storage/localStorage';
import { getActualProducts } from '../module/getActualProducts';
import { isNotNull } from '../../../shared/lib/helpers/IsNotNull';
import { IBasketCard } from '../../../shared/types/basketCard';
import { EStatusLoading } from '../../../shared/types/statusLoading';

export const CounterBasketProducts: React.FC = () => {
    const dispatch = useDispatch();
    const listener = useTypedSelector(
        (state) => state.basket.listenerUpdateProducts,
    );
    const baksetProducts = useTypedSelector(
        (state) => state.basket.products,
    ) as Array<IProductsBasket>;

    useEffect(() => {
        const products: IBasketCard[] | null = getLSData('basket');
        if (isNotNull(products)) {
            dispatch(setStatusBasket(EStatusLoading.loading));
            const updateProducts = async () => {
                const newProducts: IProductsBasket[] | null =
                    await getActualProducts(products);
                if (newProducts) {
                    dispatch(addProductsBasket(newProducts));
                }
                dispatch(setStatusBasket(EStatusLoading.success));
            };
            updateProducts();
        } else {
            dispatch(setStatusBasket(EStatusLoading.success));
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
