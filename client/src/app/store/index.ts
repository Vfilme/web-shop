import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './catalog/catalogSlice';
import basketReducer from './basket/basketSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        basket: basketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
