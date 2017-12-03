import { NAME } from '../constants';

const getStateSlice = (state, name) => state[name];

const getDataById = (state, id) => {
    let slice = getStateSlice(NAME);
    return slice[id] && slice[id].data;
}

const isDataLoading = (state, id) => {
    let slice = getStateSlice(NAME);
    return slice[id] && slice[id].isLoading;
}

export default {
    getDataById,
    isDataLoading
}