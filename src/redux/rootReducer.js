import {combineReducers} from 'redux';
import productsReducer from './products/productsReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';

import authReducer from './auth/authReducer';
const rootReducer = combineReducers({
    auth:authReducer,
    products : productsReducer,
    product:productReducer,
    carts : cartReducer,

})

export default rootReducer;