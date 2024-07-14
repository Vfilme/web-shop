import React from 'react';
import { SideBar } from '../../../widgets/side-bar';
import { Catalog } from '../../../widgets/catalog';
import './catalogPage.scss';

export const CatalogPage: React.FC = () => {
    return (
        <div className="layout-catalog">
            <SideBar />
            <Catalog />
        </div>
    );
};
