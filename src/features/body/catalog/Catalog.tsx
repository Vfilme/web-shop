/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './catalog';
import { Cards } from '../../../widgets/catalog/cards/Cards';
import { PRODUCTS } from '../../../entities/const/const';
import { Pagination } from '../../../widgets/catalog/pagination/Pagination';
import {
    getSSData,
    setSSData,
} from '../../../entities/components/helperScripts';
import { ButtonLoadMore } from '../../../widgets/catalog/buttonLoadMore/ButtonLoadMore';

export const Catalog: React.FC = () => {
    if (!sessionStorage.getItem('pageNumber')) setSSData('pageNumber', 1);
    const [numberActualPage, setNumberActualPage] = useState<number>(
        getSSData('pageNumber') as number,
    );
    const countPages = Math.ceil(20 / PRODUCTS.PAGE_SIZE);
    const conditionButtonLoadMore =
        numberActualPage * PRODUCTS.PAGE_SIZE < countPages * PRODUCTS.PAGE_SIZE;
    return (
        <div className="catalog">
            <div className="wrapperCards">
                <Cards />
            </div>
            {conditionButtonLoadMore && (
                <ButtonLoadMore
                    numberActualPage={numberActualPage}
                    fun={() => setNumberActualPage(numberActualPage + 1)}
                />
            )}
            <Pagination
                numberActualPage={numberActualPage}
                fun={(numberActualPage) =>
                    setNumberActualPage(numberActualPage)
                }
            />
        </div>
    );
};
