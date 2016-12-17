import Http from './http';

export default class PingService {
    static ping() {
        return Http.get('ping');
    }
};
