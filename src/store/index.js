import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from './createRootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(createRootReducer(), composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;