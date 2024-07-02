import { store } from '..';

export type TRootReducer = ReturnType<typeof store.getState>;
