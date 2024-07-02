import { Dispatch } from 'redux';
import axios from 'axios';
import { PRODUCTS } from '../../../entities/const/const';
import { ADD_DATA, GET_DATA } from './catalogSlice';

export const GET_URL_PAGE_SIZE = (numberPage: number) => {
    return `${PRODUCTS.URL}?page=${numberPage}&pageSize=${PRODUCTS.PAGE_SIZE}`;
};

export const getProducts = async (numberPage: number, url: string) => {
    try {
        return await axios.get(url);
    } catch {
        console.error('eror');
    }
};

export const getCount = async () => {
    try {
        return (await axios.get(`${PRODUCTS.URL}/count`))!.data.totalCount;
    } catch {
        console.error('error');
    }
};

export const getData: any = (pageNumber: number, url: string) => {
    return async (dispatch: Dispatch) => {
        const response = await getProducts(pageNumber, url);

        dispatch(GET_DATA(response!.data));
    };
};

export const addData: any = (pageNumber: number) => {
    return async (dispatch: Dispatch) => {
        const response = await getProducts(
            pageNumber,
            GET_URL_PAGE_SIZE(pageNumber),
        );

        dispatch(ADD_DATA(response!.data));
    };
};
