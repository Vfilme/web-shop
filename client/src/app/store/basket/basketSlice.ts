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
        addProductsBasket(state, action: PayloadAction<IProductsBasket[]>) {
            state.products = action.payload;
        },
        giveSignUpdateProducts(state) {
            state.listenerUpdateProducts = state.listenerUpdateProducts + 1;
        },
        removeProducts(state) {
            state.products = [];
        },
    },
});

export const { addProductsBasket, giveSignUpdateProducts, removeProducts } =
    basketSlice.actions;
export default basketSlice.reducer;
