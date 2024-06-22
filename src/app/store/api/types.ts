export enum EActionTypesPresence {
    EMPTY_DATA = "EMPTY_DATA",
}

export interface IState {
    presence: boolean,
}

interface IDataEmpty {
    type: EActionTypesPresence.EMPTY_DATA;
}

export type TActions = IDataEmpty