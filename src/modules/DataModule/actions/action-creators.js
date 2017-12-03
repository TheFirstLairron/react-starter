import ActionTypes from './action-types';

export function loadDataRequest(entryId) {
    return {
        type: ActionTypes.LOAD_DATA_REQUEST,
        payload: {
            entryId
        }
    };
}

export function loadDataSuccess(entryId, data) {
    return {
        type: ActionTypes.LOAD_DATA_SUCCESS,
        payload: {
            entryId,
            data
        }
    };
}

export function loadDataFailure(entryId) {
    return {
        type: ActionTypes.LOAD_DATA_FAILURE,
        payload: {
            entryId
        }
    };
}