/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './basketpage.scss';
import { TotalBox } from '../../widgets/basket/totalBox/TotalBox';
import { getLSData } from './modul';
import { CatalogBasket } from '../../widgets/basket/catalog/CatalogBasket';
import { IProducts } from '../../app/store/catalog/types';
import { BackLink } from '../../entities/components/ui/button/BackLink';

export const BasketPage: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(false);
    let productsBasket: Array<IProducts> = getLSData(
        'basket',
    ) as Array<IProducts>;
    useEffect(() => {
        productsBasket = getLSData('basket') as Array<IProducts>;
    }, [update]);

    return (
        <div className="pageBasket">
            <h1>Ваша корзина</h1>
            {productsBasket ? (
                [
                    <CatalogBasket products={productsBasket} />,
                    <TotalBox
                        fun={() => {
                            setUpdate(!update);
                        }}
                    />,
                ]
            ) : (
                <div className="catalogBasket">
                    <h2>Ваша корзина пуста {':('}</h2>
                    <BackLink />
                </div>
            )}
        </div>
    );
};
