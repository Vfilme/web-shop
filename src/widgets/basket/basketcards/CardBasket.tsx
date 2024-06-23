import React from 'react';
import { IBasket } from '../../../entities/components/ui/button/types';
import { BIZ_CONST } from '../../../entities/const/const';
import './cardBasket.scss';

export const CardBasket: React.FC<IBasket> = (props) => {
    return (
        <div className="cardBasket">
            <img src={props.image} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <h4>{props.category}</h4>
                <p>{(props.price * BIZ_CONST.DOLLAR_RATE).toFixed(2)} руб.</p>
                <p>шт: {props.count}</p>
            </div>
        </div>
    );
};
