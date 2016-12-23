import {combineReducers} from 'redux';
import ping from './ping';
import surveys from './surveys';
import sync from './sync';

export default combineReducers({ping, surveys, sync});
