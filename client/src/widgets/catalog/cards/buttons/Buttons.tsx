import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GIVE_SIGN_UPDATE_PRODUCTS } from '../../../../app/store/basket/basketSlice';
import { Button } from '../../../../shared/ui/button/Button';
import { getLSData } from '../../../../entities/components/helperScripts';
import { IProductsBasket } from '../../../menu/usernav/countProductsBasket/types';
import './button.scss';
import {
    addProductSystem,
    removeProductSystem,
} from '../../../../entities/components/ui/button/scripts/systemBasket';

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
                        dispatch(GIVE_SIGN_UPDATE_PRODUCTS());
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
                            dispatch(GIVE_SIGN_UPDATE_PRODUCTS());
                        }}
                    >
                        -
                    </Button>
                    <span>{countProduct}</span>
                    <Button
                        onClick={() => {
                            setUpdate(!update);
                            addProductSystem(props.product);
                            dispatch(GIVE_SIGN_UPDATE_PRODUCTS());
                        }}
                    >
                        +
                    </Button>
                </div>
            )}
        </div>
    );
};
