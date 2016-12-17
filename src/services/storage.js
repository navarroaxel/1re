import {map, castArray} from 'lodash';
import localForage from 'localforage';

export default class StorageService {
    static getCalendar() {
        localForage.createInstance({name: 'calendar'});
    }

    static getSurveys() {
        return localForage.createInstance({name: 'surveys'});
    }

    static fetch(storage) {
        const values = [];
        return storage.iterate(
            value => {
                values.push(value);
            }
        ).then(
            () => values
        );
    }

    static saveOne(storage, value) {
        return storage.setItem(value._id || new Date().getTime(), value);
    }

    static save(storage, values) {
        return Promise.all(map(
            castArray(values),
            value => StorageService.saveOne(storage, value)
        ));
    }
}
