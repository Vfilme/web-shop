import { IProductsBasket } from '../../../features/counter-basket-products';
import { TStatusLoading } from '../../../shared/types/statusLoading';
export interface IStateBasket {
    products: Array<IProductsBasket>;
    listenerUpdateProducts: number;
    status: TStatusLoading;
}
