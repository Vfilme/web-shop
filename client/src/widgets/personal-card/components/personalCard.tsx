import React, { useEffect, useState } from 'react';
import { IProducts } from '../../../app/store/catalog/types';
import { URLS } from '../../../shared/const/const';
import { getServerData } from '../../../shared/api/getServerData';
import { useParams } from 'react-router-dom';
import './personalCard.scss';
import { InformationCard } from '../../../entities/information-card';
import { BackLink } from '../../../entities/back-link/components/backLink';
import { Buttons } from '../../../features/buttons-purchase';

export const PersonalCard: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<IProducts | null>(null);
    useEffect(() => {
        const fun = async () => {
            const data = await getServerData(
                `${URLS.URL_SERVER}${URLS.URL_PRODUCT}?productId=${productId}`,
            );
            setProduct(data);
        };
        fun();
    }, []);
    return (
        <>
            {product ? (
                <InformationCard product={product}>
                    {[<Buttons product={product} />, <BackLink />]}
                </InformationCard>
            ) : (
                <h1>Товар не найден :{'('}</h1>
            )}
        </>
    );
};
