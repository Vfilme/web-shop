import { IProductsBasket } from '../../../features/counter-basket-products';
export interface IStateBasket {
    products: Array<IProductsBasket>;
    listenerUpdateProducts: number;
}
