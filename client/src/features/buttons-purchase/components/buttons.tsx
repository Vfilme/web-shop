import React, { useEffect, useState } from 'react';
import { Button } from '../../../shared/ui/button/Button';
import './button.scss';
import { getLSData } from '../../../entities/storage/localStorage';
import {
    addProductSystem,
    removeProductSystem,
} from '../../../entities/basket-card/module/systemBasket';
import { CatalogBoundSyncActions } from '../../../app/store/actions/catalogSyncActions';
import { isNotNull } from '../../../shared/lib/helpers/IsNotNull';
import { IBasketCard } from '../../../shared/types/basketCard';

interface IProps {
    id: number;
}

export const Buttons: React.FC<IProps> = ({ id }) => {
    const [countProduct, setCountProduct] = useState<number>(0);
    const [update, setUpdate] = useState<boolean>(false);
    const { giveSignUpdateProducts } = CatalogBoundSyncActions;

    useEffect(() => {
        const products: IBasketCard[] | null = getLSData('basket');
        if (isNotNull(products)) {
            const [productOrder] = products.filter((e: IBasketCard) => {
                return e.id == id;
            });
            if (productOrder) {
                setCountProduct(productOrder.count);
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
                        addProductSystem(id);
                        giveSignUpdateProducts();
                    }}
                >
                    add to bag
                </Button>
            ) : (
                <div className="incrementDecrement">
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            removeProductSystem(id);
                            giveSignUpdateProducts();
                        }}
                    >
                        -
                    </Button>
                    <span>{countProduct}</span>
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            addProductSystem(id);
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
