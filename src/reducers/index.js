import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import addOne from './addOne'

const rootReducer = combineReducers({addOne, routing: routerReducer });

export default rootReducer;
