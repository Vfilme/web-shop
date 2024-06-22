import { useDispatch } from 'react-redux';
import { remElArId } from '../../../../../shared/scripts/arrays/arrays';
import { IBasket } from '../types';

export const addProdBasket: (product: IBasket) => void = (product)=> {
    if (localStorage.getItem("basket")) {
        const LSproducts:string = localStorage.getItem("basket") as string;
        const productsJS = JSON.parse(LSproducts);
        for (const e of productsJS) {  
            if (product.id == e.id) {
                const newE = {...e};
                newE.count++;
                localStorage.setItem("basket", JSON.stringify([...remElArId(productsJS, e.id), newE]));
                break;
            } 
            else {
                localStorage.setItem("basket", JSON.stringify([...productsJS, {...product, count:1}]))
            }
        }
    } else {
        localStorage.setItem("basket", JSON.stringify([{...product, count: 1}]))
    }
}

export const cleanBasket: ()=>void=()=>{
    localStorage.removeItem("basket")
}
