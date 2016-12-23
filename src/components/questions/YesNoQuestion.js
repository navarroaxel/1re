/* eslint jsx-a11y/label-has-for:"off" */
import React, {Component, PropTypes} from 'react';

export default class YesNoQuestion extends Component {
    static propTypes = {
        answer: PropTypes.number,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange(value) {
        this.props.onChange(value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6">
                    <label>
                        <input
                            type="radio" checked={this.props.answer === 1} onChange={() => this.onChange(1)}
                        /> Si
                    </label>
                </div>
                <div className="col-sm-6">
                    <label>
                        <input
                            type="radio" checked={this.props.answer === 2} onChange={() => this.onChange(2)}
                        /> No
                    </label>
                </div>
            </div>
        );
    }
}
