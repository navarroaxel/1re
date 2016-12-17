import React, {Component, PropTypes} from 'react';

export default class Visits extends Component {
    static propTypes = {
        visits: PropTypes.arrayOf(
            PropTypes.shape({
                order: PropTypes.number.isRequired,
                date: PropTypes.instanceOf(Date).isRequired
            })
        ).isRequired
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Visitas</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Fecha</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.visits.map(visit => (
                                <tr key={visit.order}>
                                    <td>
                                        {visit.date.toString()}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
