import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateBasket } from './types';
import { IProductsBasket } from '../../../features/counter-basket-products';
const initialState: IStateBasket = {
    products: [],
    listenerUpdateProducts: 0,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        ADD_PRODUCTS(state, action: PayloadAction<IProductsBasket[]>) {
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
