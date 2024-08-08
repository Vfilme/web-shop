import { IProducts } from '../../../app/store/catalog/types';
import { getServerData } from '../../../shared/api/getServerData';
import { URLS } from '../../../shared/const/const';
import { IBasketCard } from '../../../shared/types/basketCard';
import { IProductsBasket } from '../components/types';

export const getActualProducts = async (products: IBasketCard[]) => {
    const newProducts: IProductsBasket[] = [];
    const url = `${URLS.URL_SERVER}${URLS.URL_PRODUCTS_ALL}`;
    const allProducts: IProducts[] | null = await getServerData(url);

    if (allProducts) {
        allProducts.forEach((product) => {
            products.forEach((el) => {
                if (product.id == el.id) {
                    newProducts.push({
                        ...product,
                        count: el.count,
                    });
                }
            });
        });
        return newProducts;
    }
    return null;
};
