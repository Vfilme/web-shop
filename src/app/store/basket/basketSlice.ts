import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProducts } from '../catalog/types';
import { IStateBasket } from './types';

const initialState: IStateBasket = {
    products: [],
    listenerUpdateProducts: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        ADD_PRODUCTS(state, action: PayloadAction<IProducts[]>) {
            state.products = [...action.payload];
        },
        GIVE_SIGN_UPDATE_PRODUCTS(state) {
            state.listenerUpdateProducts = state.listenerUpdateProducts + 1;
        },
        REMOVE_PRODUCTS(state) {
            state.products = [];
        },
    },
});

export const { ADD_PRODUCTS, GIVE_SIGN_UPDATE_PRODUCTS, REMOVE_PRODUCTS } =
    basketSlice.actions;
export default basketSlice.reducer;
