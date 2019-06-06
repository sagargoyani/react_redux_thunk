import productsReducer from './productsReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
});

export default rootReducer;