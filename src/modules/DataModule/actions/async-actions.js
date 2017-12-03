import axios from 'axios';

import {
    loadDataRequest,
    loadDataSuccess,
    loadDataFailure
} from './action-creators';

function LoadDataById(entryId) {
    return dispatch => {
        dispatch(loadDataRequest(entryId));
        axios.get("/").then(response => {
            dispatch(loadDataSuccess(entryId, "We got data boys!"));
        }).catch(error => {
            dispatch(loadDataFailure(entryId));
        });
    }
}

export default {
    LoadDataById
}