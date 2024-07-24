import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import presenceSlice from './api/presenceSlice';
import catalogReducer, {
    addProducts,
    getProducts,
} from './catalog/catalogSlice';
import basketReducer from './basket/basketSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        presence: presenceSlice,
        basket: basketReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const asyncActions = {
    getProducts,
    addProducts,
};

export const boundAsyncActions = bindActionCreators(
    asyncActions,
    store.dispatch,
);
