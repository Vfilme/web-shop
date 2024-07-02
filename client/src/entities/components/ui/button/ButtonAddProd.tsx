import React from 'react';
import { IBasket } from './types';
import { addProductSystem } from './scripts/systemBasket';
import { Button } from '../../../../shared/ui/button/Button';
import { useDispatch } from 'react-redux';
import { GIVE_SIGN_UPDATE_PRODUCTS } from '../../../../app/store/basket/basketSlice';

export const ButtonAddProd: React.FC<IBasket> = (props) => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => {
                addProductSystem(props);
                dispatch(GIVE_SIGN_UPDATE_PRODUCTS());
            }}
        >
            в&nbsp;корзину
        </Button>
    );
};
