import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    status: boolean;
}

const initialState: IState = {
    status: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setStatusFilter(state, action: PayloadAction<boolean>) {
            state.status = action.payload;
        },
    },
});

export const { setStatusFilter } = filterSlice.actions;
export default filterSlice.reducer;
