import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootReducer } from './types';

export const useTypedSelector: TypedUseSelectorHook<TRootReducer> = useSelector;