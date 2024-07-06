import { IProducts } from '../../../../../app/store/catalog/types';
import { remElArId } from '../../../../../shared/scripts/arrays/arrays';
import { IProductsBasket } from '../../../../../widgets/menu/usernav/countProductsBasket/types';
import { getLSData, setLSData } from '../../../helperScripts';
import { IBasket } from '../types';

export const addProductSystem: (product: IBasket) => void = (product) => {
    if (getLSData('basket')) {
        const productsJS = getLSData('basket') as Array<IProductsBasket>;
        for (const e of productsJS) {
            if (product.id == e.id) {
                const newE = { ...e };
                newE.count++;
                // setLSData('basket', [...remElArId(productsJS, e.id), newE]);
                const newProducts = productsJS.map((el) => {
                    if (el.id == product.id) {
                        el.count++;
                        return el;
                    } else {
                        return el;
                    }
                });
                setLSData('basket', [...newProducts]);

                break;
            } else {
                setLSData('basket', [...productsJS, { ...product, count: 1 }]);
            }
        }
    } else {
        setLSData('basket', [{ ...product, count: 1 }]);
    }
};

export const removeProductSystem: (product: IProducts) => void = (product) => {
    const productsJS: any = getLSData('basket');
    const productBasket = productsJS.filter((el: any) => {
        return el.id == product.id;
    })[0];
    if (
        productBasket.count == 1 &&
        remElArId(productsJS, product.id).length == 0
    ) {
        console.log('last in basket');
        localStorage.removeItem('basket');
    }
    if (productBasket.count == 1 && remElArId(productsJS, product.id).length) {
        setLSData('basket', [...remElArId(productsJS, product.id)]);
        console.log('last in product');
    }
    if (productBasket.count > 1) {
        // setLSData('basket', [
        //     ...remElArId(productsJS, product.id),
        //     { ...productBasket, count: productBasket.count - 1 },
        // ]);
        const newProducts = productsJS.map((el: IProductsBasket) => {
            if (el.id == product.id) {
                el.count--;
                return el;
            } else {
                return el;
            }
        });
        setLSData('basket', newProducts);
        console.log('not last');
    }
};

export const cleanBasket: () => void = () => {
    localStorage.removeItem('basket');
};
