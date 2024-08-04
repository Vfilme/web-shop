import { bindActionCreators } from 'redux';
import { addProducts, getProducts } from '../catalog/catalogSlice';
import { store } from '..';

const asyncActions = {
    getProducts,
    addProducts,
};

export const CatalogBoundAsyncActions = bindActionCreators(
    asyncActions,
    store.dispatch,
);
