import React, { memo } from 'react';
import './cardBasket.scss';
import { Buttons } from '../../../features/buttons-purchase';
import { Link } from 'react-router-dom';
import { ICardBasket } from '../module/type';
import '../assets/images/bin.png';
import { deleteProduct } from '../module/systemBasket';
import { CatalogBoundSyncActions } from '../../../app/store/actions/catalogSyncActions';

const CardBasket: React.FC<ICardBasket> = ({ ...product }) => {
    const { giveSignUpdateProducts } = CatalogBoundSyncActions;

    return (
        <div className="card-basket">
            <Link to={`/product/${product.id}`} className="image-card">
                <img src={product.image} alt={product.title} />
            </Link>
            <div className="container-control">
                <div className="description">
                    <Link to={`/product/${product.id}`} className="image-card">
                        <h2>{product.title}</h2>
                    </Link>
                    <p>{product.category}</p>
                    <p>rating: {product.rating}</p>
                </div>
                <div className="product-price">
                    <span>${(product.price * product.count).toFixed(2)}</span>
                </div>
                <div className="product-controler">
                    <Buttons id={product.id} count={product.count} />
                </div>
                <div className="product-delete">
                    <button
                        onClick={() => {
                            deleteProduct(product.id);
                            giveSignUpdateProducts();
                        }}
                    >
                        <img src="images/bin.png" alt="delete product" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export const MemoizedCardBasket = memo(CardBasket);
