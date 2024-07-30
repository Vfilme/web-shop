import React from 'react';
import { Link } from 'react-router-dom';
import { cutSentence } from '../lib/helpers/cutSentence';
import './catalogCard.scss';
import { ReadonlyComponentProps } from './types';

export const CatalogCard: React.FC<ReadonlyComponentProps> = ({
    el,
    children,
}) => {
    return (
        <div className="catalog-card">
            <Link to={`/product/${el.id}`}>
                <img src={el.image} alt={el.title} />
            </Link>
            <div className="card-description">
                <h2>{cutSentence(el.title, 5, 40)}</h2>
                <h4>{el.category}</h4>
                <p>${el.price.toFixed(2)}</p>
                {children}
            </div>
        </div>
    );
};
