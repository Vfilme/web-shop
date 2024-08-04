import React from 'react';
import './cardBasket.scss';
import { Buttons } from '../../../features/buttons-purchase';
import { Link } from 'react-router-dom';

interface ICardBasket {
    image: string;
    title: string;
    id: number;
    rating: number;
    price: number;
    count: number;
    category: string;
}

export const CardBasket: React.FC<ICardBasket> = ({
    id,
    title,
    image,
    rating,
    price,
    count,
    category,
}) => {
    return (
        <div className="card-basket">
            <Link to={`/product/${id}`} className="image-card">
                <img src={image} alt={title} />
            </Link>
            <div>
                <Link to={`/product/${id}`} className="image-card">
                    <h2>{title}</h2>
                </Link>
                <p>{category}</p>
                <p>rating: {rating}</p>
            </div>
            <div className="cash-result">
                <Buttons
                    product={{
                        id,
                        title,
                        image,
                        rating,
                        price,
                        count,
                        category,
                    }}
                />
                <p>${(price * count).toFixed(2)}</p>
            </div>
        </div>
    );
};
