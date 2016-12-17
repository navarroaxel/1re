import {call, put} from 'redux-saga/effects';
import {receivePing, handleErrorPing} from '../actions';
import PingService from '../services/ping';

export default function* ping() {
    try {
        const pong = yield call(PingService.ping);
        yield put(receivePing(pong));
    } catch (e) {
        yield put(handleErrorPing(e));
    }
}
