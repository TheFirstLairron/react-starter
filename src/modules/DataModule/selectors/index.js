import { NAME } from '../constants';

const getStateSlice = (state, name) => {
    return state[name];
};

const getDataById = (state, id) => {
    let slice = getStateSlice(state, NAME);
    return slice[id] && slice[id].data;
}

const isDataLoading = (state, id) => {
    let slice = getStateSlice(state, NAME);
    return slice[id] && slice[id].isLoading;
}

export default {
    getDataById,
    isDataLoading
}