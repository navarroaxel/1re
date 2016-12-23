import {AREAS_FETCH_SUCCEEDED, SURVEYS_FETCH_SUCCEEDED, SURVEY_FETCH_SUCCEEDED} from '../actions';

export default function surveys(state = {}, action) {
    switch (action.type) {
        case AREAS_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                areas: action.areas
            });
        case SURVEYS_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                surveys: action.surveys
            });
        case SURVEY_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                survey: action.survey
            });
        default:
            return state;
    }
}
