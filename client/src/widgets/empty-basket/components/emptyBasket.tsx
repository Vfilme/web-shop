import { BackLink } from '../../../entities/back-link';
import './emptyBasket.scss';
import React from 'react';

export const EmptyBasket: React.FC = () => {
    return (
        <div className="empty-basket">
            <p>Your shopping cart is empty {':('}</p>
            <BackLink />
        </div>
    );
};
