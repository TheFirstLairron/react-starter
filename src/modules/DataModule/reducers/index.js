import { createReducer } from 'redux-create-reducer';

import loadDataRequest from './load-data-request';
import loadDataSuccess from './load-data-success';
import loadDataFailure from './load-data-failure';

import ActionTypes from '../actions/action-types';

// State Overview
// {
//     [id]: {
//         data,
//         isLoading
//     }
// }
const initialState = {};

const reducer = createReducer(initialState, {
    [ActionTypes.LOAD_DATA_REQUEST]: loadDataRequest,
    [ActionTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
    [ActionTypes.LOAD_DATA_FAILURE]: loadDataFailure
});

export default reducer;