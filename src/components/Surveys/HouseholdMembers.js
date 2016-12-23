import React from 'react';
import {connect} from 'react-redux';

const HouseholdMembers = () => (
    <div>
        <div className="row">
            <div className="col-sm-12">
                <h3>Componentes de Hogar</h3>
            </div>
        </div>
    </div>
);

export default connect(
    state => ({survey: state.surveys.survey})
)(HouseholdMembers);
