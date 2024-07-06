import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProducts } from '../../app/store/catalog/types';
import { getServerData } from '../../entities/scripts/serverScripts';
import { URLS } from '../../entities/const/const';
import './productPage.scss';
import { Buttons } from '../../widgets/catalog/cards/buttons/Buttons';
import { BackLink } from '../../entities/components/ui/button/BackLink';

export const ProductPage: React.FC = () => {
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
                <div className="wrapperProduct">
                    <div className="image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="description">
                        <h2>{product.title}</h2>
                        <h4>{product.category}</h4>
                        <p>${product.price.toFixed(2)}</p>
                        <Buttons product={product} />
                        <BackLink />
                    </div>
                </div>
            ) : (
                <h1>Товар не найден :{'('}</h1>
            )}
        </>
    );
};
