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

export default function* root() {
    yield [
        takeLatest(PING_REQUESTED, ping),
        takeLatest(SYNC_REQUESTED, sync),
        takeLatest(AREAS_FETCH_REQUESTED, fetchAreas),
        takeLatest(SURVEYS_FETCH_REQUESTED, fetchSurveys),
        takeLatest(SURVEY_FETCH_REQUESTED, fetchSurvey),
        takeLatest(PING_REQUESTED, ping),
        takeLatest(SURVEY_SAVE_REQUESTED, saveSurvey)
    ];
}
