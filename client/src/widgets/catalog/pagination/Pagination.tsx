/* eslint-disable react/jsx-key */
import './pagination';
import React from 'react';
import { createMassiveFromNumber } from '../../../shared/scripts/arrays/arrays';
import { PRODUCTS } from '../../../entities/const/const';
import { useTypedSelector } from '../../../app/store/hooks/hooks';
import { setSSData } from '../../../entities/components/helperScripts';
import { useDispatch } from 'react-redux';
import {
    REPEAT_LOAD,
    UPDATE_NUMBER_PAGE,
} from '../../../app/store/catalog/catalogSlice';
import { getClassNamePagination } from './module';
import { IProps } from './types';

export const Pagination: React.FC<IProps> = ({ numberActualPage, fun }) => {
    const dispatch = useDispatch();
    const pageNumber = useTypedSelector((state) => state.catalog.pageNumber);

    const pageSize = PRODUCTS.PAGE_SIZE;
    const countPages = Math.ceil(20 / pageSize);

    const massive = createMassiveFromNumber(countPages);

    return (
        <div className="pagination">
            <span
                onClick={() => {
                    if (1 == pageNumber) dispatch(REPEAT_LOAD());
                    dispatch(UPDATE_NUMBER_PAGE(1));
                    setSSData('pageNumber', 1);
                    fun(1);
                }}
            >
                {'<'}
            </span>
            {massive.map((el: number) => {
                return (
                    <span
                        className={`${numberActualPage == el ? 'actualPage' : ''} ${getClassNamePagination(numberActualPage, countPages, el)}`}
                        onClick={() => {
                            if (el == pageNumber) dispatch(REPEAT_LOAD());
                            dispatch(UPDATE_NUMBER_PAGE(el));
                            setSSData('pageNumber', el);
                            fun(el);
                        }}
                    >
                        {el}
                    </span>
                );
            })}
            <span
                onClick={() => {
                    dispatch(UPDATE_NUMBER_PAGE(countPages));
                    setSSData('pageNumber', countPages);
                    fun(countPages);
                }}
            >
                {'>'}
            </span>
        </div>
    );
};
