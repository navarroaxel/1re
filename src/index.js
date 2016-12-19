import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger';
import saga from 'redux-saga';
import App from './components/App';
import Surveys from './components/Surveys';
import Area from './components/Surveys/Area';
import SurveyDetails from './components/Surveys/SurveyDetails';
import SurveyEditor from './components/Surveys/SurveyEditor';
import Sync from './components/Sync';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = saga();
const store = createStore(reducers, applyMiddleware(createLogger(), sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="surveys" component={Surveys}/>
                <Route path="surveys/:area" component={Area}/>
                <Route path="surveys/:area/:survey" component={SurveyDetails}/>
                <Route path="surveys/:area/:survey/editor" component={SurveyEditor}/>
                <Route path="sync" component={Sync}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
