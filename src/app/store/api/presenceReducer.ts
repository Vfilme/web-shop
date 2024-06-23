import { EActionTypesPresence, IState, TActions } from './types';

const initialState: IState = {
    presence: true,
};

export const presenceReducer = (
    state = initialState,
    action: TActions
): IState => {
    switch (action.type) {
        case EActionTypesPresence.EMPTY_DATA:
            return { presence: false };
        default:
            return state;
    }
};
