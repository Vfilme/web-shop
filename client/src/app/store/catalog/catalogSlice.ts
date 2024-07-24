import axios from 'axios';
import { IStateCatalog, IProducts } from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IStateCatalog = {
    products: [],
    status: 'idle',
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
                state.status = 'loading';
            })
            .addCase(
                getProducts.fulfilled,
                (state, action: PayloadAction<IProducts[]>) => {
                    state.products = action.payload;
                    state.status = 'success';
                },
            )
            .addCase(getProducts.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(addProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                addProducts.fulfilled,
                (state, action: PayloadAction<IProducts[]>) => {
                    state.products = [...state.products, ...action.payload];
                    state.status = 'success';
                },
            )
            .addCase(addProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default catalogSlice.reducer;
