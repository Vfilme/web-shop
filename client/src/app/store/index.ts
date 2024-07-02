import { configureStore } from '@reduxjs/toolkit';
import presenceSlice from './api/presenceSlice';
import catalogReducer from './catalog/catalogSlice';
import basketReducer from './basket/basketSlice';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        presence: presenceSlice,
        basket: basketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
