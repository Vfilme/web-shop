import React from 'react';
import './productPage.scss';
import { PersonalCard } from '../../../widgets/personal-card/components/personalCard';

export const ProductPage: React.FC = () => {
    return (
        <div className="product-page">
            <PersonalCard />
        </div>
    );
};
