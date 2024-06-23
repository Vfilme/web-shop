import { UserAction, IState, EActionTypes, IProducts } from './types';

const initialState: IState = {
    products: [],
    pageNumber: JSON.parse(sessionStorage.getItem('pageNumber') as string) || 1,
    repeatLoad: 0,
};

export const basketReducer = (
    state = initialState,
    action: UserAction
): IState => {
    switch (action.type) {
        case EActionTypes.GET_DATA:
            return { ...state, products: [...action.payload] };
        case EActionTypes.ADD_DATA:
            return {
                ...state,
                products: [...state.products, ...action.payload],
            };
        case EActionTypes.UPDATE_PAGE_NUMBER:
            return { ...state, pageNumber: action.payload };
        case EActionTypes.REPEAT_LOAD:
            return { ...state, repeatLoad: state.repeatLoad + 1 };
        default:
            return state;
    }
};

export const GET_DATA = (value: Array<IProducts>) => {
    return { type: EActionTypes.GET_DATA, payload: value };
};
export const ADD_DATA = (value: Array<IProducts>) => {
    return { type: EActionTypes.ADD_DATA, payload: value };
};
export const UPDATE_NUMBER_PAGE = (value: number) => {
    return { type: EActionTypes.UPDATE_PAGE_NUMBER, payload: value };
};
export const REPEAT_LOAD = () => {
    return { type: EActionTypes.REPEAT_LOAD };
};
