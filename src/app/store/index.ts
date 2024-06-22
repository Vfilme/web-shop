import {applyMiddleware, combineReducers, createStore} from 'redux';
import { basketReducer } from './basket/basketReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { presenceReducer } from './api/presenceReducer';

export const rootReducer:any = combineReducers({
    basket: basketReducer,
    presence: presenceReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  