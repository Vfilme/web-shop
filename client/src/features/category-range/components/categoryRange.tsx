import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './categoryRange.scss';
import { URLS } from '../../../shared/const/const';
import { getServerData } from '../../../shared/api/getServerData';
import { getStatusChecked } from '../model/getStatusChecked';
import { setCategoriesInURL } from '../model/setCategoriesInURL';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CategoryRange: React.FC = () => {
    const [categories, setCategories] = useState<string[] | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fun = async () => {
            const data = await getServerData(
                `${URLS.URL_SERVER}${URLS.URL_PRODUCTS_CATEGORIES}`,
            );
            setCategories(data);
        };
        fun();
    }, []);

    return (
        <div className="category-range">
            <p>Categories</p>
            <ul>
                {categories ? (
                    categories.map((el: string, i: number) => {
                        return (
                            <li key={i}>
                                <input
                                    type="checkbox"
                                    checked={getStatusChecked(el, searchParams)}
                                    onChange={() => {
                                        setCategoriesInURL(
                                            el,
                                            searchParams,
                                            setSearchParams,
                                        );
                                    }}
                                />
                                {el}
                            </li>
                        );
                    })
                ) : (
                    <>
                        <li>
                            <Skeleton />
                        </li>
                        <li>
                            <Skeleton />
                        </li>
                        <li>
                            <Skeleton />
                        </li>
                        <li>
                            <Skeleton />
                        </li>
                        <li>
                            <Skeleton />
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};
