import React, {PropTypes} from 'react';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import DevTools from './DevTools';
import routes from '../routes';

const Root = ({store}) => (
    <Provider store={store}>
        <div>
            {process.env.NODE_ENV !== 'production' && <DevTools/>}
            <Router history={hashHistory} routes={routes}/>
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({})
};

export default Root;
