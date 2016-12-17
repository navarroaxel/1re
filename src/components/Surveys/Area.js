import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {requestSurveys} from '../../actions';

class Area extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        surveys: PropTypes.arrayOf(
            PropTypes.shape({
                _id: React.PropTypes.string
            })
        )
    };

    componentDidMount() {
        this.props.dispatch(requestSurveys(this.props.params.area));
    }

    renderContent() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-responsive table-stripped">
                        <thead>
                        <tr>
                            <th>Domicilio</th>
                            <th>N° de vivienda en el listado</th>
                            <th>Visitas efectuadas</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.surveys.map(survey =>
                            <tr key={survey._id}>
                                <td>
                                    {`${survey.address.street} ${survey.address.streetNumber}`}
                                    {` ${survey.address.floor} ${survey.address.department}`}
                                </td>
                                <td>{survey.address.listNumber}</td>
                                <td>{survey.visits ? survey.visits.length : 0}</td>
                                <td>
                                    <Link to={`/surveys/${this.props.params.area}/${survey._id}`}>
                                        <span className="glyphicon glyphicon-log-out"/>
                                    </Link>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Area {this.props.params.area}</h2>
                    </div>
                </div>
                {this.props.surveys && this.renderContent()}
            </div>
        );
    }
}

export default connect(
    state => ({surveys: state.surveys.surveys})
)(Area);
