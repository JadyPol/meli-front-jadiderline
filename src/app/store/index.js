import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers/index';

const middlewareList = [thunk, logger];

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(...middlewareList)));
