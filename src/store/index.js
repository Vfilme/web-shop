import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../actions/countSaga';
import { countReducer } from './countReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    countReducer
});
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countWatcher);
