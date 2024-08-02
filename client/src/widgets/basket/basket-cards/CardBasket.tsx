import React from 'react';
import './cardBasket.scss';
import { IBasket } from '../../../entities/button-basket/types';
import { Buttons } from '../../../features/buttons-purchase';

export const CardBasket: React.FC<IBasket> = (props) => {
    return (
        <div className="cardBasket">
            <img src={props.images[0]} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <h4>{props.category.name}</h4>
                <p>${props.price.toFixed(2)}</p>
            </div>
            <Buttons product={props} />
        </div>
    );
};
