import update from 'immutability-helper';

function loadDataSuccess(state = {}, action) {
    const { entryId, data } = action.payload;

    return update(state, {
        $merge: {
            [entryId]: {
                data,
                isLoading: false
            }
        }
    });
}

export default loadDataSuccess;