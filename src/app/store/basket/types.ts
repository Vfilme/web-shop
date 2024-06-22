export interface IState {
    products: Array<IProducts>,
    pageNumber: number,
    repeatLoad: number
}

export enum EActionTypes {
    GET_DATA = "GET_DATA",
    ADD_DATA = "ADD_DATA",
    UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER",
    REPEAT_LOAD = "REPEAT_LOAD",
}

export interface IProducts {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}

export interface IActionGetData {
    type: EActionTypes.GET_DATA;
    payload: Array<IProducts>
}

export interface IActionAddData {
    type: EActionTypes.ADD_DATA,
    payload: Array<IProducts>,
}

export interface IActionUpdatePageNumber {
    type: EActionTypes.UPDATE_PAGE_NUMBER,
    payload: number,
}

export interface IActionRepeatLoad {
    type: EActionTypes.REPEAT_LOAD,
}

export type UserAction = IActionGetData | IActionAddData | IActionUpdatePageNumber | IActionRepeatLoad;