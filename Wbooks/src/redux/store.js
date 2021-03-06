import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import Reactotron from '../config/reactotronConfig';

import bookReducer from './book/reducer';
import authReducer from './authentication/reducer';
import navigationOptionsReducer from './navigationOptions/reducer';

const middlewares = [thunk, fetchMiddleware];

const reducers = {
  bookReducer,
  authReducer,
  navigationOptionsReducer
};

const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));
if (__DEV__) {
  enhancers.push(Reactotron.createEnhancer(true));
}
const appReducer = combineReducers(reducers);
const store = createStore(appReducer, compose(...enhancers));
Reactotron.setReduxStore(store);

export default store;
