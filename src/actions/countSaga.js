import { put, takeEvery } from 'redux-saga/effects';
import { ASYNC_INCREMET, ASYNC_DECREMET, incrementCreater, decrementCreater } from '../store/countReducer';

const delay = ms => new Promise(res=>setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000);
    yield put(incrementCreater()); 
}

function* decrementWorker() {
    yield delay(2000);
    yield put(decrementCreater()); 
}

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMET, incrementWorker);
    yield takeEvery(ASYNC_DECREMET, decrementWorker);
}