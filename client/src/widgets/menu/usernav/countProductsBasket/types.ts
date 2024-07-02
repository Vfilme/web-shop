import { IProducts } from '../../../../app/store/catalog/types';

export interface IProductsBasket extends IProducts {
    count: number;
}
