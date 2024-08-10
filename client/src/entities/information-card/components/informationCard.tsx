import React from 'react';
import { IProducts } from '../../../app/store/catalog/types';
import './informationCard.scss';

interface IProps {
    product: IProducts;
    children: React.ReactNode;
}

export const InformationCard: React.FC<IProps> = ({ product, children }) => {
    const [buttons, backlink] = React.Children.toArray(children);
    return (
        <div className="wrapper-product">
            <img src={product.images[0]} alt={product.title} />
            <div className="description">
                <h2>{product.title}</h2>
                <h4>Category: {product.category.name}</h4>
                <p>Description: {product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                {buttons}
                <div className="wrapper-back-link">{backlink}</div>
            </div>
        </div>
    );
};
