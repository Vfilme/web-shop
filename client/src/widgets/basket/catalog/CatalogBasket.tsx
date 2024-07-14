import './catalogBasket';
import React from 'react';
import { CardBasket } from '../basket-cards/CardBasket';
import { IProducts } from '../../../app/store/catalog/types';

interface IProps {
    products: Array<IProducts>;
}

export const CatalogBasket: React.FC<IProps> = (props) => {
    return (
        <div className="catalogBasket">
            {(props.products as Array<IProducts>).map((el: IProducts) => {
                return <CardBasket {...el} key={el.id} />;
            })}
        </div>
    );
};
