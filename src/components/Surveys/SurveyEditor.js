import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {requestSurvey, saveSurvey} from '../../actions';

import NavigationButtons from './NavigationButtons';

class SurveyEditor extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isREquired,
        params: PropTypes.shape({
            survey: PropTypes.string.isRequired
        }),
        survey: PropTypes.shape({
            _id: PropTypes.string.isRequired
        })
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.dispatch(requestSurvey(this.props.params.survey));
    }

    navigateTo(component) {
        if (this.props.survey) {
            this.props.dispatch(saveSurvey(this.props.survey));
        }
        this.setState({component});
    }

    renderContent(Comp) {
        if (Comp && this.props.survey) {
            return <Comp survey={this.props.survey}/>;
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>
                            Encuesta editor
                        </h2>
                    </div>
                </div>
                {this.renderContent(this.state.component)}
                <NavigationButtons
                    survey={this.props.survey} onChange={component => this.navigateTo(component)}
                />
            </div>
        );
    }
}

export default connect(
    state => ({survey: state.surveys.survey})
)(SurveyEditor);
