import { IStatePresence } from './types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IStatePresence = {
    presence: true,
};

const presenceSlice = createSlice({
    name: 'presence',
    initialState,
    reducers: {
        EMPTY_DATA(state) {
            state.presence = false;
        },
    },
});

export const { EMPTY_DATA } = presenceSlice.actions;
export default presenceSlice.reducer;
