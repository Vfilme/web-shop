import { bindActionCreators } from 'redux';
import {
    addProductsBasket,
    giveSignUpdateProducts,
    removeProducts,
} from '../basket/basketSlice';
import { store } from '..';

const syncActions = {
    addProductsBasket,
    giveSignUpdateProducts,
    removeProducts,
};

export const CatalogBoundSyncActions = bindActionCreators(
    syncActions,
    store.dispatch,
);
