import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
    )
    // window.devToolsExtension && window.devToolsExtension(),

export default store;