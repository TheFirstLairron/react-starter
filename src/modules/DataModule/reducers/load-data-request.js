import update from 'immutability-helper';

function loadDataRequest(state = {}, action) {
    const { entryId } = action.payload;

    return update(state, {
        $merge: {
            [entryId]: {
                data: null,
                isLoading: true
            }
        }
    });
}

export default loadDataRequest;