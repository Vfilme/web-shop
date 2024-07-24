import React from 'react';
import { Button } from '../../../shared/ui/button/Button';
import { cleanBasket } from '../../../entities/components/ui/button/scripts/systemBasket';
import './totalBox.scss';
import { useDispatch } from 'react-redux';
import { removeProducts } from '../../../app/store/basket/basketSlice';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';
import { getCountArrayObjects } from '../../../entities/scripts/helperScripts';
import { IProductsBasket } from '../../../features/counter-basket-products';

export const TotalBox: React.FC = () => {
    const dispatch = useDispatch();
    const baksetProducts = useTypedSelector((state) => state.basket.products);

    const totalSumProducts = (products: IProductsBasket[]) => {
        const totalSum: number = products.reduce(
            (sum: number, el: IProductsBasket) => {
                return sum + el.count * el.price;
            },
            0,
        );
        return totalSum;
    };
    return (
        <div className="totalBox">
            <div className="basketOrder">
                <h3>Ваш заказ:</h3>
                <p>Товары шт. {getCountArrayObjects(baksetProducts)} </p>
                <p>Итого: ${totalSumProducts(baksetProducts).toFixed(2)}</p>
                <Button>оформить</Button>
                <Button
                    onClick={() => {
                        cleanBasket();
                        dispatch(removeProducts());
                    }}
                >
                    удалить всё
                </Button>
            </div>
        </div>
    );
};
