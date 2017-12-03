import { update } from 'immutability-helper';

function loadDataFailure(state = {}, action) {
    let { entryId } = action.payload;

    return update(state, {
        $merge: {
            [entryId]: {
                data: null,
                isLoading: false
            }
        }
    });
}

export default loadDataFailure;