import { Dispatch } from 'redux';
import axios from 'axios';
import { PRODUCTS } from '../../../entities/const/const';
import { ADD_DATA, GET_DATA } from './basketSlice';

export const getProducts = async (numberPage: number) => {
    try {
        return await axios.get(
            `${PRODUCTS.URL}?page=${numberPage}&pageSize=${PRODUCTS.PAGE_SIZE}`,
        );
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

export const getData: any = (pageNumber: number) => {
    return async (dispatch: Dispatch) => {
        const response = await getProducts(pageNumber);

        dispatch(GET_DATA(response!.data));
    };
};

export const addData: any = (pageNumber: number) => {
    return async (dispatch: Dispatch) => {
        const response = await getProducts(pageNumber);

        dispatch(ADD_DATA(response!.data));
    };
};
