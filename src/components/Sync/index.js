/* global navigator */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {requestPing, requestSync} from '../../actions';

class Sync extends Component {
    static propTypes = {
        isPinging: PropTypes.bool.isRequired,
        pong: PropTypes.shape({}).isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(requestPing());
    }

    onClickSync() {
        const {dispatch} = this.props;
        dispatch(requestSync());
    }

    getPingState() {
        if (this.props.isPinging) {
            return 'fa fa-spinner fa-pulse';
        }
        if (this.props.pong) {
            return 'fa fa-check';
        }
        return 'fa fa-times';
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Sync</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>
                            Conexión a internet
                            <span className={`fa ${navigator.onLine ? 'fa-check' : 'fa-times'}`}/>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h4>
                            Servidor online
                            <span className={this.getPingState()}/>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={() => this.onClickSync()} className="btn btn-primary">
                            Sincronizar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        isPinging: state.ping.isPinging,
        pong: state.ping.pong
    })
)(Sync);
