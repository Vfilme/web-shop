import { IProducts } from '../catalog/types';

export interface IStateBasket {
    products: Array<IProducts>;
    listenerUpdateProducts: number;
}
