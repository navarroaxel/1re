import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {requestAreas} from '../../actions';

class Surveys extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        areas: PropTypes.arrayOf(
            PropTypes.shape({
                id: React.PropTypes.number
            })
        )
    };

    componentDidMount() {
        this.props.dispatch(requestAreas());
    }

    renderContent() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <table className="table table-responsive table-stripped">
                        <thead>
                        <tr>
                            <th>Area</th>
                            <th>Departamento</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.areas.map(area =>
                            <tr key={area.id}>
                                <td>{area.id}</td>
                                <td>{area.department}</td>
                                <td>
                                    <Link to={`/surveys/${area.id}`}>
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
                        <h2>Areas</h2>
                    </div>
                </div>
                {this.props.areas && this.renderContent()}
            </div>
        );
    }
}

export default connect(
    state => ({areas: state.surveys.areas})
)(Surveys);
