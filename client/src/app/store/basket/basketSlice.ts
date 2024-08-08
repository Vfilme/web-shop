import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateBasket } from './types';
import { IProductsBasket } from '../../../features/counter-basket-products';
import {
    EStatusLoading,
    TStatusLoading,
} from '../../../shared/types/statusLoading';
const initialState: IStateBasket = {
    products: [],
    status: EStatusLoading.idle,
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
        setStatusBasket(state, action: PayloadAction<TStatusLoading>) {
            state.status = action.payload;
        },
    },
});

export const {
    addProductsBasket,
    giveSignUpdateProducts,
    removeProducts,
    setStatusBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
