import { useReducer } from 'react';
import { combineReducers, us } from 'redux';
import authReducer from './auth.reducers';
import userReducer from './user.reducers';
import productReducer from './product.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './product.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
});

export default rootReducer;