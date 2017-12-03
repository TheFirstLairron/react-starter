import { combineReducers } from 'redux';

import allModules from '../modules';

function createReducerMap() {
    let reducerMap = {};
    for (let mod of allModules) {
        reducerMap[mod.NAME] = mod.reducer;
    }

    return reducerMap;
}

function createRootReducer() {
    return combineReducers(createReducerMap());
}

export default createRootReducer;