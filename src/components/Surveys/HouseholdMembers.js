import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class HouseholdMembers extends Component {
    static propTypes = {
        survey: PropTypes.shape({
            _id: PropTypes.string.isRequired
        })
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Componentes de Hogar</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({survey: state.surveys.survey})
)(HouseholdMembers);
