import React from 'react';
import { Button } from '../../../../shared/ui/button/Button';
import './totalBox.scss';
import { useTypedSelector } from '../../../../app/store/hooks/useTypedSelector';
import { getCountArrayObjects } from '../../../../shared/lib/helpers/getCountArrayObjects';
import { IProductsBasket } from '../../../../features/counter-basket-products';

export const TotalBox: React.FC = () => {
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
        <div className="basket-order">
            <div>
                <h3>Your order:</h3>
                <p>Products pcs. {getCountArrayObjects(baksetProducts)} </p>
                <p>Total: ${totalSumProducts(baksetProducts).toFixed(2)}</p>
                <Button>arrange</Button>
            </div>
        </div>
    );
};
