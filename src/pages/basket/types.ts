import { IProducts } from '../../app/store/basket/types';

export interface IProductsBasket extends IProducts {
    count: number;
}
