import {takeLatest} from 'redux-saga';
import {
    PING_REQUESTED,
    AREAS_FETCH_REQUESTED,
    SURVEYS_FETCH_REQUESTED,
    SURVEY_FETCH_REQUESTED,
    SURVEY_SAVE_REQUESTED,
    SYNC_REQUESTED
} from '../actions';
import ping from './ping';
import {fetchAreas, fetchSurveys, fetchSurvey, saveSurvey} from './survey';
import sync from './sync';

function* mySaga() {
    yield takeLatest(PING_REQUESTED, ping);
    yield takeLatest(SYNC_REQUESTED, sync);
    yield takeLatest(AREAS_FETCH_REQUESTED, fetchAreas);
    yield takeLatest(SURVEYS_FETCH_REQUESTED, fetchSurveys);
    yield takeLatest(SURVEY_FETCH_REQUESTED, fetchSurvey);
    yield takeLatest(SURVEY_SAVE_REQUESTED, saveSurvey)
}

export default mySaga;
