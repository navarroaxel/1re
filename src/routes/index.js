import React from 'react';
import {Route} from 'react-router';
import App from '../components/App';
import Surveys from '../components/Surveys';
import Area from '../components/Surveys/Area';
import SurveyDetails from '../components/Surveys/SurveyDetails';
import SurveyEditor from '../components/Surveys/SurveyEditor';
import Sync from '../components/Sync';

export default (
    <Route path="/" component={App}>
        <Route path="surveys" component={Surveys}/>
        <Route path="surveys/:area" component={Area}/>
        <Route path="surveys/:area/:survey" component={SurveyDetails}/>
        <Route path="surveys/:area/:survey/editor" component={SurveyEditor}/>
        <Route path="sync" component={Sync}/>
    </Route>
);
