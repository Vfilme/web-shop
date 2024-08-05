import axios from 'axios';
import { IStateCatalog, IProducts } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EStatusLoading } from '../../../shared/types/statusLoading';

const initialState: IStateCatalog = {
    products: [],
    status: EStatusLoading.idle,
};

export const getProducts = createAsyncThunk<
    IProducts[],
    string,
    { rejectValue: string }
>('catalog/getProducts', async (url: string, thunkAPI) => {
    try {
        const { data } = await axios.get<IProducts[]>(url);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
    }
});

export const addProducts = createAsyncThunk<
    IProducts[],
    string,
    { rejectValue: string }
>('catalog/addProducts', async (url: string, thunkAPI) => {
    try {
        const { data } = await axios.get<IProducts[]>(url);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message);
    }
});

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = EStatusLoading.loading;
            })
            .addCase(
                getProducts.fulfilled,
                (state, action: PayloadAction<IProducts[]>) => {
                    state.products = action.payload;
                    state.status = EStatusLoading.success;
                },
            )
            .addCase(getProducts.rejected, (state) => {
                state.status = EStatusLoading.failed;
            })
            .addCase(addProducts.pending, (state) => {
                state.status = EStatusLoading.loading;
            })
            .addCase(
                addProducts.fulfilled,
                (state, action: PayloadAction<IProducts[]>) => {
                    state.products = [...state.products, ...action.payload];
                    state.status = EStatusLoading.success;
                },
            )
            .addCase(addProducts.rejected, (state) => {
                state.status = EStatusLoading.failed;
            });
    },
});

export default catalogSlice.reducer;
