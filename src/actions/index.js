export const PING_REQUESTED = 'PING_REQUESTED';
export const PING_SUCCEEDED = 'PING_SUCCEEDED';
export const PING_FAILED = 'PING_FAILED';

export function requestPing() {
    return {type: PING_REQUESTED};
}

export function receivePing(pong) {
    return {type: PING_SUCCEEDED, pong};
}

export function handleErrorPing(e) {
    return {type: PING_FAILED, message: e.message};
}

export const AREAS_FETCH_REQUESTED = 'AREAS_FETCH_REQUESTED';
export const AREAS_FETCH_SUCCEEDED = 'AREAS_FETCH_SUCCEEDED';

export function requestAreas() {
    return {type: AREAS_FETCH_REQUESTED};
}

export function receiveAreas(areas) {
    return {type: AREAS_FETCH_SUCCEEDED, areas};
}

export const SURVEYS_FETCH_REQUESTED = 'SURVEYS_FETCH_REQUESTED';
export const SURVEYS_FETCH_SUCCEEDED = 'SURVEYS_FETCH_SUCCEEDED';

export function requestSurveys(area) {
    return {type: SURVEYS_FETCH_REQUESTED, area};
}

export function receiveSurveys(surveys) {
    return {type: SURVEYS_FETCH_SUCCEEDED, surveys};
}

export const SURVEY_FETCH_REQUESTED = 'SURVEY_FETCH_REQUESTED';
export const SURVEY_FETCH_SUCCEEDED = 'SURVEY_FETCH_SUCCEEDED';

export function requestSurvey(id) {
    return {type: SURVEY_FETCH_REQUESTED, id};
}

export function receiveSurvey(survey) {
    return {type: SURVEY_FETCH_SUCCEEDED, survey};
}

export const SURVEY_SAVE_REQUESTED = 'SURVEY_SAVE_REQUESTED';

export function saveSurvey(survey) {
    return {type: SURVEY_SAVE_REQUESTED, survey};
}

export const SYNC_REQUESTED = 'SYNC_REQUESTED';
export const SYNC_SUCCEEDED = 'SYNC_SUCCEEDED';
export const SYNC_FAILED = 'SYNC_FAILED';

export function requestSync() {
    return {type: SYNC_REQUESTED};
}

export function receiveSync(surveys) {
    return {type: SYNC_SUCCEEDED, surveys};
}

export function handleErrorSync(e) {
    return {type: SYNC_FAILED, message: e.message};
}
