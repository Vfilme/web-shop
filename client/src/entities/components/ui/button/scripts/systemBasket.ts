import { remElArId } from '../../../../../shared/scripts/arrays/arrays';
import { getLSData, setLSData } from '../../../helperScripts';
import { IBasket } from '../types';

export const addProductSystem: (product: IBasket) => void = (product) => {
    if (getLSData('basket')) {
        const productsJS = getLSData('basket') as Array<any>;
        for (const e of productsJS) {
            if (product.id == e.id) {
                const newE = { ...e };
                newE.count++;
                setLSData('basket', [...remElArId(productsJS, e.id), newE]);
                break;
            } else {
                setLSData('basket', [...productsJS, { ...product, count: 1 }]);
            }
        }
    } else {
        setLSData('basket', [{ ...product, count: 1 }]);
    }
};

export const cleanBasket: () => void = () => {
    localStorage.removeItem('basket');
};
