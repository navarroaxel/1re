import {map, filter, uniqBy, parseInt} from 'lodash';
import StorageService from './storage';

export default class SurveyService {
    static clear() {
        return StorageService.getSurveys().clear();
    }

    static fetch() {
        return StorageService.fetch(StorageService.getSurveys());
    }

    static fetchByArea(area) {
        const id = parseInt(area);
        return SurveyService.fetch().then(
            surveys => filter(
                surveys,
                survey => survey.address.area === id
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
        return StorageService.saveOne(
            StorageService.getSurveys(),
            Object.assign({}, survey, {
                updated: new Date(),
                synced: false
            })
        );
    }

    static saveAll(surveys) {
        return StorageService.save(
            StorageService.getSurveys(),
            map(surveys,
                survey => Object.assign({}, survey, {
                    updated: new Date(),
                    synced: false
                })
            )
        );
    }
}
