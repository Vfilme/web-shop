import React, { memo } from 'react';
import './cardBasket.scss';
import { Buttons } from '../../../features/buttons-purchase';
import { Link } from 'react-router-dom';
import { ICardBasket } from '../module/type';

const CardBasket: React.FC<ICardBasket> = ({ ...product }) => {
    return (
        <div className="card-basket">
            <Link to={`/product/${product.id}`} className="image-card">
                <img src={product.image} alt={product.title} />
            </Link>
            <div className="description">
                <Link to={`/product/${product.id}`} className="image-card">
                    <h2>{product.title}</h2>
                </Link>
                <p>{product.category}</p>
                <p>rating: {product.rating}</p>
            </div>
            <div className="cash-result">
                <Buttons id={product.id} />
                <p>${(product.price * product.count).toFixed(2)}</p>
            </div>
        </div>
    );
};

export const MemoizedCardBasket = memo(CardBasket);
