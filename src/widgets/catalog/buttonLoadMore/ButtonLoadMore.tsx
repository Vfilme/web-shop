import React from 'react';
import { Button } from '../../../shared/ui/button/Button';
import { useDispatch } from 'react-redux';
import { setSSData } from '../../../entities/components/helperScripts';
import { IProps } from './types';
import { addData } from '../../../app/store/basket/actions';
import './buttonLoadMore.scss';

export const ButtonLoadMore: React.FC<IProps> = ({ fun, numberActualPage }) => {
    const dispatch = useDispatch();
    return (
        <div className="buttonLoadMore">
            <Button
                onClick={() => {
                    dispatch(addData(numberActualPage + 1));
                    setSSData('pageNumber', numberActualPage + 1);
                    fun();
                }}
            >
                загрузить еще
            </Button>
        </div>
    );
};
