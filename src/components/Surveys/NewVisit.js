import React, {Component, PropTypes} from 'react';
import {hashHistory} from 'react-router';
import {saveSurvey} from '../../actions';

export default class NewVisit extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        survey: PropTypes.shape({
            _id: PropTypes.string.isRequired
        }).isRequired
    };

    onClick() {
        const {survey} = this.props;
        if (!survey.visits) {
            survey.visits = [];
        }
        survey.visits.push({
            order: survey.visits.length,
            date: new Date()
        });
        // TODO AN: dispatch VISIT_OPENED;
        this.props.dispatch(saveSurvey(survey));
        hashHistory.push(`/surveys/${survey.address.area}/${survey._id}/editor`);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <button onClick={() => this.onClick()} className="btn btn-primary">
                        Nueva visita
                    </button>
                </div>
            </div>
        );
    }
}
