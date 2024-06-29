import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './cards';
import { cutSentence } from './module';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { getSSData } from '../../../entities/components/helperScripts';
import { IProducts } from '../../../app/store/basket/types';
import { getData } from '../../../app/store/basket/actions';
import { ButtonAddProd } from '../../../entities/components/ui/button/ButtonAddProd';
import { BIZ_CONST } from '../../../entities/const/const';

export const Cards: React.FC = () => {
    const pageNumber: number = useTypedSelector(
        (state) => state.basket.pageNumber,
    );
    const actualPageNumber = getSSData('pageNumber');
    const products = useTypedSelector((state) => state.basket.products);
    const repeatLoad = useTypedSelector((state) => state.basket.repeatLoad);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData(actualPageNumber));
    }, [pageNumber, repeatLoad]);

    return (products as Array<IProducts>).map((el) => {
        return (
            <div className="cards" key={el.id}>
                <img src={el.image} alt={el.title} />
                <div>
                    <h2>{cutSentence(el.title, 8, 40)}</h2>
                    <h4>{el.category}</h4>
                    <p>{(el.price * BIZ_CONST.DOLLAR_RATE).toFixed(2)} руб.</p>
                    <ButtonAddProd {...el} />
                </div>
            </div>
        );
    });
};
