import createLogger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from 'redux/modules';

export default function configureStore() {
  return createStore(combineReducers(reducers), applyMiddleware(createLogger()));
}
