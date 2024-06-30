import { IProducts } from '../../app/store/catalog/types';

export const getLSData: (key: string) => Array<IProducts> | null = (key) => {
    if (!localStorage.getItem(key)) return null;
    const json: string = localStorage.getItem(key) as string;
    return JSON.parse(json);
};
