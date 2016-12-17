import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// import {receiveSurvey} from '../../actions';

import MultiOptionQuestion from '../questions/MultiOptionQuestion';
import YesNoQuestion from '../questions/YesNoQuestion';

class Detection extends Component {
    static propTypes = {
        survey: PropTypes.shape({
            _id: PropTypes.string.isRequired
        })
    };

    constructor(props) {
        super(props);
        const {survey} = this.props;
        if (!survey.detection) {
            survey.detection = {};
        }
    }

    setAnswer(field, value) {
        const {survey} = this.props;
        survey.detection[field] = value;
        this.setState({survey});
        // this.props.dispatch(receiveSurvey({survey}));
    }

    render() {
        const {detection} = this.props.survey;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        Preg 1
                        <YesNoQuestion answer={detection.q1} onChange={a => this.setAnswer('q1', a)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        Preg 2
                        <YesNoQuestion answer={detection.q2} onChange={a => this.setAnswer('q2', a)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        Preg 3
                        <MultiOptionQuestion answer={detection.q3} onChange={a => this.setAnswer('q3', a)}
                                             options={[
                                                 {id: 1, name: 'Siempre'},
                                                 {id: 2, name: 'Nunca'}
                                             ]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({survey: state.surveys.survey})
)(Detection);
