import React, { useEffect, useState } from 'react';
import { boundSyncActions } from '../../../app/store';
import { IProductsBasket } from '../../counter-basket-products';
import { Button } from '../../../shared/ui/button/Button';
import './button.scss';
import { getLSData } from '../../../entities/storage/localStorage';
import {
    addProductSystem,
    removeProductSystem,
} from '../../../entities/button-basket/systemBasket';

export const Buttons: React.FC<any> = ({ product }) => {
    const [countProduct, setCountProduct] = useState<number>(0);
    const [update, setUpdate] = useState<boolean>(false);
    const { giveSignUpdateProducts } = boundSyncActions;

    useEffect(() => {
        const productsBasket: IProductsBasket[] | null = getLSData('basket');
        if (productsBasket) {
            const listCount = productsBasket.filter(({ id }) => {
                return id == product.id;
            });
            if (listCount[0]) {
                setCountProduct(listCount[0].count);
            } else {
                setCountProduct(0);
            }
        } else {
            setCountProduct(0);
        }
    }, [update]);
    return (
        <div className="buttonsWrapper">
            {countProduct == 0 ? (
                <Button
                    onClick={() => {
                        setUpdate(!update);
                        addProductSystem(product);
                        giveSignUpdateProducts();
                    }}
                >
                    купить
                </Button>
            ) : (
                <div className="incrementDecrement">
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            removeProductSystem(product);
                            giveSignUpdateProducts();
                        }}
                    >
                        -
                    </Button>
                    <span>{countProduct}</span>
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            addProductSystem(product);
                            giveSignUpdateProducts();
                        }}
                    >
                        +
                    </Button>
                </div>
            )}
        </div>
    );
};
