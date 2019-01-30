import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import auth from './auth'
import projects from './projects'

export default combineReducers({
    routing: routerReducer,
    auth,
    projects
})