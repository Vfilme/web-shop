import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProductsBasket } from '../../../features/counter-basket-products';
import { getLSData } from '../../components/helperScripts';
import {
    addProductSystem,
    removeProductSystem,
} from '../../components/ui/button/scripts/systemBasket';
import { giveSignUpdateProducts } from '../../../app/store/basket/basketSlice';
import { Button } from '../../../shared/ui/button/Button';
import './button.scss';

export const Buttons: React.FC<any> = (props) => {
    const [countProduct, setCountProduct] = useState<any>([]);
    const [update, setUpdate] = useState<boolean>(false);

    useEffect(() => {
        const productsBasket: IProductsBasket[] | null = getLSData('basket');
        if (productsBasket) {
            const listCount = productsBasket.filter(({ id }) => {
                return id == props.product.id;
            });
            if (listCount[0]) {
                console.log(listCount[0].count);
                setCountProduct(listCount[0].count);
            } else {
                console.log('last in product !');
                setCountProduct(0);
            }
        } else {
            setCountProduct(0);
        }
    }, [update]);
    const dispatch = useDispatch();
    return (
        <div className="buttonsWrapper">
            {countProduct == 0 ? (
                <Button
                    onClick={() => {
                        setUpdate(!update);
                        addProductSystem(props.product);
                        dispatch(giveSignUpdateProducts());
                    }}
                >
                    купить
                </Button>
            ) : (
                <div className="incrementDecrement">
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            removeProductSystem(props.product);
                            dispatch(giveSignUpdateProducts());
                        }}
                    >
                        -
                    </Button>
                    <span>{countProduct}</span>
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            addProductSystem(props.product);
                            dispatch(giveSignUpdateProducts());
                        }}
                    >
                        +
                    </Button>
                </div>
            )}
        </div>
    );
};
