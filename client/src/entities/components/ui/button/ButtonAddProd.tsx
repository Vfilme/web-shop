import React from 'react';
import { IBasket } from './types';
import { addProductSystem } from './scripts/systemBasket';
import { Button } from '../../../../shared/ui/button/Button';
import { useDispatch } from 'react-redux';
import { giveSignUpdateProducts } from '../../../../app/store/basket/basketSlice';

export const ButtonAddProd: React.FC<IBasket> = (props) => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => {
                addProductSystem(props);
                dispatch(giveSignUpdateProducts());
            }}
        >
            в&nbsp;корзину
        </Button>
    );
};
