import { removeElementFromArrayById } from '../../../shared/lib/arrays/arrays';
import { isNotNull } from '../../../shared/lib/helpers/IsNotNull';
import { IBasketCard } from '../../../shared/types/basketCard';
import { getLSData, setLSData } from '../../storage/localStorage';

export const addProductSystem: (id: number) => void = (id) => {
    const products: IBasketCard[] | null = getLSData('basket');
    if (isNotNull(products)) {
        for (const product of products) {
            if (product.id == id) {
                product.count++;
                setLSData('basket', [...products]);
                break;
            } else {
                setLSData('basket', [...products, { id: id, count: 1 }]);
            }
        }
    } else {
        setLSData('basket', [{ id: id, count: 1 }]);
    }
};

export const removeProductSystem: (id: number) => void = (id) => {
    const products: IBasketCard[] | null = getLSData('basket');

    if (isNotNull(products)) {
        const product = products.filter((el: IBasketCard) => {
            return el.id == id;
        })[0];

        if (product.count == 1) {
            if (removeElementFromArrayById(products, id).length == 0)
                localStorage.removeItem('basket');
            else {
                setLSData('basket', [
                    ...removeElementFromArrayById(products, id),
                ]);
            }
        } else {
            const newProducts = products.map((el: IBasketCard) => {
                if (el.id == id) {
                    el.count--;
                }
                return el;
            });
            setLSData('basket', newProducts);
        }
    }
};

export const deleteProduct = (id: number) => {
    const products: IBasketCard[] | null = getLSData('basket');

    if (isNotNull(products)) {
        const newProducts = removeElementFromArrayById(products, id);
        setLSData('basket', newProducts);
        if (newProducts.length == 0) localStorage.removeItem('basket');
    }
};

export const cleanBasket: () => void = () => {
    localStorage.removeItem('basket');
};
