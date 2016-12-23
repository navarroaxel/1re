import {SYNC_REQUESTED, SYNC_SUCCEEDED} from '../actions';

export default function ping(state = {
    isSyncing: false
}, action) {
    switch (action.type) {
        case SYNC_REQUESTED:
            return Object.assign({}, state, {
                isSyncing: true
            });
        case SYNC_SUCCEEDED:
            return Object.assign({}, state, {
                isSyncing: false,
                completed: true
            });
        default:
            return state;
    }
}
