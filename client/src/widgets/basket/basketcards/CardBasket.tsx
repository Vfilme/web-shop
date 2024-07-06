import React from 'react';
import { IBasket } from '../../../entities/components/ui/button/types';
import { BIZ_CONST } from '../../../entities/const/const';
import './cardBasket.scss';
import { Buttons } from '../../catalog/cards/buttons/Buttons';

export const CardBasket: React.FC<IBasket> = (props) => {
    return (
        <div className="cardBasket">
            <img src={props.image} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <h4>{props.category}</h4>
                <p>${props.price.toFixed(2)}</p>
            </div>
            <Buttons product={props} />
        </div>
    );
};
