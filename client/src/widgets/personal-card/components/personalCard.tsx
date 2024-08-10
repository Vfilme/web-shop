import React, { useEffect, useState } from 'react';
import { IProducts } from '../../../app/store/catalog/types';
import { URLS } from '../../../shared/const/const';
import { getServerData } from '../../../shared/api/getServerData';
import { useParams } from 'react-router-dom';
import './personalCard.scss';
import { InformationCard } from '../../../entities/information-card';
import { BackLink } from '../../../entities/back-link/components/backLink';
import { Buttons } from '../../../features/buttons-purchase';
import { EStatusLoading } from '../../../shared/types/statusLoading';

export const PersonalCard: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [statusProduct, setStatusProduct] = useState<EStatusLoading>(
        EStatusLoading.idle,
    );
    const [product, setProduct] = useState<IProducts | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            setStatusProduct(EStatusLoading.loading);
            const data = await getServerData(
                `${URLS.URL_SERVER}${URLS.URL_PRODUCT}?productId=${productId}`,
            );
            if (data) {
                setProduct(data);
                setStatusProduct(EStatusLoading.success);
            } else {
                setStatusProduct(EStatusLoading.failed);
            }
        };
        getProduct();
    }, []);

    const success = product && statusProduct == EStatusLoading.success;

    return (
        <>
            {success && (
                <InformationCard product={product}>
                    <>
                        <Buttons id={product.id} />
                        <BackLink />
                    </>
                </InformationCard>
            )}
            {statusProduct == EStatusLoading.loading && (
                <div>
                    <h2>The product is being loaded...</h2>
                </div>
            )}
            {statusProduct == EStatusLoading.failed && (
                <div>
                    <h2>
                        An error occurred with the connection. Please check your
                        internet connection and try again
                    </h2>
                </div>
            )}
        </>
    );
};
