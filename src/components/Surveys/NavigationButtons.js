import React, {Component, PropTypes} from 'react';

import Detection from './Detection';
import HouseholdMembers from './HouseholdMembers'

export default class NavigationButtons extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired
    };

    static nodes = [Detection, HouseholdMembers];

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    componentDidMount() {
        this.props.onChange(NavigationButtons.nodes[this.state.index]);
    }

    goToNode(index) {
        this.props.onChange(NavigationButtons.nodes[index]);
        this.setState(prevState => ({index}));
    }

    render() {
        const {index} = this.state;
        return (
            <div className="row">
                <div className="col-sm-4">
                    {index > 0 && <button onClick={() => this.goToNode(index - 1)} className="btn btn-primary">
                        Anterior
                    </button>}
                </div>
                <div className="col-sm-4 text-right">
                    {index < NavigationButtons.nodes.length - 1 && <button
                        onClick={() => this.goToNode(index + 1)} className="btn btn-primary">
                        Siguiente
                    </button>}
                </div>
            </div>
        );
    }
}
