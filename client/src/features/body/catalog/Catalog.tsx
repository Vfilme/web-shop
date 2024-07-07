/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import './catalog';
import { Cards } from '../../../widgets/catalog/cards/Cards';
import { SideBar } from '../../../widgets/catalog/sidebar/SideBar';
import { Pagination } from '../../../widgets/catalog/pagination/Pagination';
import { ButtonLoadMore } from '../../../widgets/catalog/buttonLoadMore/ButtonLoadMore';

export const Catalog: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(true);
    return (
        <div className="catalog">
            <div className="wrapperCards">
                <div className="sideBarWrapper">
                    <SideBar />
                </div>
                <div className="content">
                    <Cards
                        update={update}
                        fun={(update) => setUpdate(update)}
                    />
                </div>
            </div>
            <ButtonLoadMore fun={(update) => setUpdate(update)} />
            <Pagination
                fun={(update) => {
                    setUpdate(update);
                }}
            />
        </div>
    );
};
