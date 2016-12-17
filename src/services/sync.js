import Http from './http';
import SurveyService from './survey';

export default class SyncService {
    static sync() {
        return SurveyService.fetch().then(
            surveys => Http.post('sync', {surveys})
        ).then(
            data => SurveyService.clear().then(
                () => SurveyService.saveAll(data.surveyAddresses)
            )
        );
    }
}
