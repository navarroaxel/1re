/* eslint jsx-a11y/label-has-for:"off" */
import React, {Component, PropTypes} from 'react';

export default class MultiOptionQuestion extends Component {
    static propTypes = {
        answer: PropTypes.arrayOf(
            PropTypes.bool.isRequired
        ),
        options: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        answer: []
    };

    onChange(index) {
        const {answer} = this.props;
        answer[index] = !answer[index];
        this.props.onChange(answer);
    }

    render() {
        const {options, answer} = this.props;
        return (
            <div>
                {options.map((option, index) => (
                    <div key={option.id} className="row">
                        <div className="col-sm-6">
                            <label>
                                <input
                                    type="checkbox" checked={!!answer[index]} onChange={() => this.onChange(index)}
                                /> {option.name}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
