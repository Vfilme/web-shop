import { useDispatch } from 'react-redux';
import { cleanBasket } from '../../../entities/button-basket/systemBasket';
import './catalogBasket.scss';
import React, { memo } from 'react';
import { removeProducts } from '../../../app/store/basket/basketSlice';
import { CardBasket } from '../../../entities/basket-card/components/cardBasket';
import { useTypedSelector } from '../../../app/store/hooks/useTypedSelector';

const MemoizedCardBasket = memo(CardBasket);

export const CatalogBasket: React.FC = () => {
    const dispatch = useDispatch();
    const products = useTypedSelector((state) => state.basket.products);

    return (
        <div>
            <button
                className="del-products-basket"
                onClick={() => {
                    cleanBasket();
                    dispatch(removeProducts());
                }}
            >
                delete all
            </button>
            <div className="products-basket">
                {products.map((el) => {
                    // return <CardBasket {...el} key={el.id} />;
                    // return <MemoizedCardBasket {...el} key={el.id} />;
                    return (
                        <MemoizedCardBasket
                            title={el.title}
                            image={el.images[0]}
                            id={el.id}
                            count={el.count}
                            price={el.price}
                            rating={el.rating}
                            category={el.category.name}
                            key={el.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};
