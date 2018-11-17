import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import auth from './auth'
import resources from './resources'

export default combineReducers({
    routing: routerReducer,
    auth: auth,
    resources: resources
})