import { createStore, combineReducers } from 'redux';

import Reactotron from '../config/reactotronConfig';

import bookReducer from './book/reducer';

const reducers = {
  bookReducer
};

const appReducer = combineReducers(reducers);

const store = createStore(appReducer, Reactotron.createEnhancer(true));
Reactotron.setReduxStore(store);

export default store;
