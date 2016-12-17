import {call, put} from 'redux-saga/effects';
import {receiveAreas, receiveSurveys, receiveSurvey} from '../actions';
import SurveyService from '../services/survey';

export function* fetchAreas() {
    const areas = yield call(SurveyService.fetchAreas);
    yield put(receiveAreas(areas));
}

export function* fetchSurveys(action) {
    const surveys = yield call(SurveyService.fetchByArea, action.area);
    yield put(receiveSurveys(surveys));
}

export function* fetchSurvey(action) {
    const survey = yield call(SurveyService.find, action.id);
    yield put(receiveSurvey(survey));
}

export function* saveSurvey(action) {
    const survey = yield call(SurveyService.save, action.survey);
    yield put(receiveSurvey(survey));
}
