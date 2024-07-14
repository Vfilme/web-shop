import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './categoryRange.scss';
import { URLS } from '../../entities/const/const';
import { getServerData } from '../../entities/scripts/serverScripts';

export const CategoryRange: React.FC = () => {
    const [categories, setCategories] = useState<string[]>();
    const [searchParams, setSearchParams] = useSearchParams();

    const changeChecked = (el: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!searchParams.has('categories')) {
            params.set('categories', `${[`${el}`]}`);
            setSearchParams(params);
        } else {
            const categories = new Set([
                ...(params.get('categories')?.split(',') as Array<string>),
            ]);
            if (categories.has(el)) {
                categories.delete(el);
                if (categories.size)
                    params.set('categories', `${[...categories]}`);
                else {
                    params.delete('categories');
                }
                setSearchParams(params);
            } else {
                categories.add(el);
                params.set('categories', `${[...categories]}`);
                setSearchParams(params);
            }
        }
    };
    useEffect(() => {
        const fun = async () => {
            const data = await getServerData(
                `${URLS.URL_SERVER}${URLS.URL_PRODUCTS_CATEGORIES}`,
            );
            setCategories(data);
        };
        fun();
    }, []);

    const getStatusChecked = (el: string) => {
        return (
            searchParams.has('categories')
                ? searchParams.get('categories')?.split(',')
                : ['empty']
        )?.includes(el);
    };

    return (
        <div className="category-range">
            <p>Categories</p>
            <ul>
                {categories
                    ? categories.map((el: string, i: number) => {
                          return (
                              <li key={i}>
                                  <input
                                      type="checkbox"
                                      checked={getStatusChecked(el)}
                                      onChange={() => {
                                          changeChecked(el);
                                      }}
                                  />
                                  {el}
                              </li>
                          );
                      })
                    : ''}
            </ul>
        </div>
    );
};
