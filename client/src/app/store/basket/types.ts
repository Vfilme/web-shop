import { IProductsBasket } from '../../../widgets/menu/usernav/countProductsBasket/types';

export interface IStateBasket {
    products: Array<IProductsBasket>;
    listenerUpdateProducts: number;
}
