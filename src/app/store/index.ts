import { configureStore } from '@reduxjs/toolkit';
import presenceSlice from './api/presenceSlice';
import basketSlice from './basket/basketSlice';

export const store = configureStore({
    reducer: {
        basket: basketSlice,
        presence: presenceSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
