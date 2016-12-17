import {forEach, map, filter, uniqBy} from 'lodash';
import StorageService from './storage';

export default class SurveyService {
    static clear() {
        return StorageService.getSurveys().clear();
    }

    static fetch() {
        return StorageService.fetch(StorageService.getSurveys());
    }

    static fetchByArea(area) {
        return SurveyService.fetch().then(
            surveys => filter(
                surveys,
                survey => survey.address.area == area
            )
        );
    }

    static find(id) {
        return StorageService.getSurveys().getItem(id);
    }

    static fetchAreas() {
        return SurveyService.fetch().then(
            surveys => map(
                uniqBy(surveys, survey => survey.address.area),
                survey => ({
                    id: survey.address.area,
                    department: survey.address.neighborhood,
                    week: survey.week
                })
            )
        );
    }

    static save(survey) {
        survey.updated = new Date();
        survey.synced = false;
        return StorageService.saveOne(StorageService.getSurveys(), survey);
    }

    static saveAll(surveys) {
        forEach(surveys,
            survey => {
                survey.updated = new Date();
                survey.synced = true;
            }
        );
        return StorageService.save(StorageService.getSurveys(), surveys);
    }
}
