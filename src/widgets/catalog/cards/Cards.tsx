import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './cards';
import { cutSentence } from './module';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { getSSData } from '../../../entities/components/helperScripts';
import { IProducts } from '../../../app/store/catalog/types';
import { GET_URL_PAGE_SIZE, getData } from '../../../app/store/catalog/actions';
import { ButtonAddProd } from '../../../entities/components/ui/button/ButtonAddProd';
import { BIZ_CONST } from '../../../entities/const/const';

export const Cards: React.FC = () => {
    const pageNumber: number = useTypedSelector(
        (state) => state.catalog.pageNumber,
    );
    const actualPageNumber = getSSData('pageNumber');
    const products = useTypedSelector((state) => state.catalog.products);
    const repeatLoad = useTypedSelector((state) => state.catalog.repeatLoad);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getData(
                actualPageNumber,
                GET_URL_PAGE_SIZE(actualPageNumber as number),
            ),
        );
    }, [pageNumber, repeatLoad]);

    return (products as Array<IProducts>).map((el) => {
        return (
            <div className="cards" key={el.id}>
                <img src={el.image} alt={el.title} />
                <div>
                    <h2>{cutSentence(el.title, 8, 40)}</h2>
                    <h4>{el.category}</h4>
                    <p>${el.price.toFixed(2)}</p>
                    {/*BIZ_CONST.DOLLAR_RATE*/}
                    <ButtonAddProd {...el} />
                </div>
            </div>
        );
    });
};
