import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {requestSurvey} from '../../actions';
import NewVisit from './NewVisit';
import Visits from './Visits';

class SurveyDetails extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        params: PropTypes.shape({
            survey: PropTypes.string.isRequired
        }),
        survey: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            visits: PropTypes.arrayOf(
                PropTypes.shape({
                    order: PropTypes.number.isRequired,
                    date: PropTypes.instanceOf(Date).isRequired
                })
            )
        })
    };

    componentDidMount() {
        this.props.dispatch(requestSurvey(this.props.params.survey));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Encuesta</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-right">
                        {this.props.survey
                        && <NewVisit dispatch={this.props.dispatch} survey={this.props.survey}/>}
                    </div>
                </div>
                {this.props.survey && <Visits visits={this.props.survey.visits || []}/>}
            </div>
        );
    }
}

export default connect(
    state => ({survey: state.surveys.survey})
)(SurveyDetails);
