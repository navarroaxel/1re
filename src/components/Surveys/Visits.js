import React, {PropTypes} from 'react';

const Visits = ({visits}) => (
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
                        {visits.map(visit => (
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

Visits.propTypes = {
    visits: PropTypes.arrayOf(
        PropTypes.shape({
            order: PropTypes.number.isRequired
        })
    )
};

export default Visits;
