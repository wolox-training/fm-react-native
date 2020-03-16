import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../config/reactotronConfig';

import bookReducer from './book/reducer';

const reducers = {
  bookReducer
};

const enhancers = [];
enhancers.push(applyMiddleware(thunk));
if (__DEV__) enhancers.push(Reactotron.createEnhancer(true));
const appReducer = combineReducers(reducers);
const store = createStore(appReducer, compose(...enhancers));
Reactotron.setReduxStore(store);

export default store;
