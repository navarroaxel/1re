import {call, put} from 'redux-saga/effects';
import {receiveSync, handleErrorSync} from '../actions';
import SyncService from '../services/sync';

export default function* sync() {
    try {
        const surveys = yield call(SyncService.sync);
        yield put(receiveSync(surveys));
    } catch (e) {
        yield put(handleErrorSync(e));
    }
}
