import React from 'react';
import { Button } from '../../../shared/ui/button/Button';
import { cleanBasket } from '../../../entities/components/ui/button/scripts/systemBasket';
import { IProps } from './types';
import './totalBox.scss';
import { useDispatch } from 'react-redux';
import { REMOVE_PRODUCTS } from '../../../app/store/basket/basketSlice';

export const TotalBox: React.FC<IProps> = ({ fun }) => {
    const dispatch = useDispatch();
    return (
        <div className="totalBox">
            <Button>оформить</Button>
            <Button
                onClick={() => {
                    cleanBasket();
                    fun();
                    dispatch(REMOVE_PRODUCTS());
                }}
            >
                удалить всё
            </Button>
        </div>
    );
};
