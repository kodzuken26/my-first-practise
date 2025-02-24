import { createStore, combineReducers } from 'redux';
import { orderReducer } from '../reducers/orderReducer';

const rootReducer = combineReducers({
    order: orderReducer
});

const store = createStore(rootReducer);

export default store;