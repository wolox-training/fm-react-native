import { createStore, combineReducers } from 'redux';

import bookReducer from './book/reducer';

const reducers = {
  bookReducer
};

const appReducer = combineReducers(reducers);

const store = createStore(appReducer);

export default store;
