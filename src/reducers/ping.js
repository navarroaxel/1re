import {PING_REQUESTED, PING_SUCCEEDED} from '../actions';
export default function ping(state = {
    isPinging: false
}, action) {
    switch (action.type) {
        case PING_REQUESTED:
            return Object.assign({}, state, {
                isPinging: true
            });
        case PING_SUCCEEDED:
            return Object.assign({}, state, {
                isPinging: false,
                pong: action.pong
            });
        default:
            return state;
    }
}
