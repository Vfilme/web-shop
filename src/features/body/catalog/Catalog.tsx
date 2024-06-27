/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './catalog';
import { Cards } from '../../../widgets/cards/Cards';
import { Button } from '../../../shared/ui/button/Button';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { addData } from '../../../app/store/basket/actions';
import { createMassiveFromNumber } from '../../../shared/scripts/arrays/arrays';
import {
    REPEAT_LOAD,
    UPDATE_NUMBER_PAGE,
} from '../../../app/store/basket/basketSlice';
import { PRODUCTS } from '../../../entities/const/const';

export const Catalog: React.FC = () => {
    if (!sessionStorage.getItem('pageNumber'))
        sessionStorage.setItem('pageNumber', JSON.stringify(1));
    const [numberActualPage, setNumberActualPage] = useState<number>(
        JSON.parse(sessionStorage.getItem('pageNumber') as string),
    );
    const pageNumber = useTypedSelector((state) => state.basket.pageNumber);

    const dispatch = useDispatch();

    const pageSize = PRODUCTS.PAGE_SIZE;
    const countPages = Math.ceil(20 / pageSize);

    const massive = createMassiveFromNumber(countPages);

    return (
        <div className="bodyCatalog">
            <div className=""></div>
            <div className="catalog">
                <Cards />
            </div>
            {numberActualPage * pageSize < countPages * pageSize && ( //
                <Button
                    onClick={() => {
                        dispatch(addData(numberActualPage + 1));
                        sessionStorage.setItem(
                            'pageNumber',
                            `${numberActualPage + 1}`,
                        );
                        setNumberActualPage(numberActualPage + 1);
                    }}
                >
                    загрузить еще
                </Button>
            )}
            <div className="pagination">
                <span
                    onClick={() => {
                        if (1 == pageNumber) dispatch(REPEAT_LOAD());
                        dispatch(UPDATE_NUMBER_PAGE(1));
                        sessionStorage.setItem('pageNumber', JSON.parse('1'));
                        setNumberActualPage(1);
                    }}
                >
                    {'<'}
                </span>
                {massive.map((el: number) => {
                    return (
                        <span
                            className={`${numberActualPage == el ? 'actualPage' : ''} ${` ${numberActualPage - 1 ? numberActualPage - 1 : 3} ${numberActualPage} ${numberActualPage == countPages ? countPages - 2 : ''} ${numberActualPage + 1} `.includes(el.toString()) ? '' : 'outSideGroup'}`}
                            onClick={() => {
                                if (el == pageNumber) dispatch(REPEAT_LOAD());
                                dispatch(UPDATE_NUMBER_PAGE(el));
                                sessionStorage.setItem(
                                    'pageNumber',
                                    JSON.parse(`${el}`),
                                );
                                setNumberActualPage(el);
                            }}
                        >
                            {el}
                        </span>
                    );
                })}
                <span
                    onClick={() => {
                        dispatch(UPDATE_NUMBER_PAGE(countPages));
                        sessionStorage.setItem(
                            'pageNumber',
                            JSON.parse(`${countPages}`),
                        );
                        setNumberActualPage(countPages);
                    }}
                >
                    {'>'}
                </span>
            </div>
        </div>
    );
};
