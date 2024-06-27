import { IStateBasket, IProducts } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IStateBasket = {
    products: [],
    pageNumber: JSON.parse(sessionStorage.getItem('pageNumber') as string) || 1,
    repeatLoad: 0,
};

const basketSlice = createSlice({
    name: 'bakset',
    initialState,
    reducers: {
        GET_DATA(state, action: PayloadAction<IProducts[]>) {
            state.products = [...action.payload];
        },
        ADD_DATA(state, action: PayloadAction<IProducts[]>) {
            state.products = [...state.products, ...action.payload];
        },
        UPDATE_NUMBER_PAGE(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload;
        },
        REPEAT_LOAD(state) {
            state.repeatLoad = state.repeatLoad + 1;
        },
    },
});

export const { GET_DATA, ADD_DATA, UPDATE_NUMBER_PAGE, REPEAT_LOAD } =
    basketSlice.actions;
export default basketSlice.reducer;
