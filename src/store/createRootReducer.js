import { combineReducers } from 'redux';

import allModules from '../modules';

function createReducerMap() {
    let reducerMap = {};
    for (let mod in allModules) {
        reducerMap[allModules[mod].NAME] = allModules[mod].reducer;
    }

    return reducerMap;
}

function createRootReducer() {
    return combineReducers(createReducerMap());
}

export default createRootReducer;