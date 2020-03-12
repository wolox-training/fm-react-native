import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../config/reactotronConfig';

import bookReducer from './book/reducer';

const reducers = {
  bookReducer
};

// Reactotron.createEnhancer(true)

const appReducer = combineReducers(reducers);

const store = createStore(appReducer, applyMiddleware(thunk));
Reactotron.setReduxStore(store);

export default store;
