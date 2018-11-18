import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import auth from './auth'
import resources from './resources'
import costItems from './costItems'

export default combineReducers({
    routing: routerReducer,
    auth,
    resources,
    costItems
})