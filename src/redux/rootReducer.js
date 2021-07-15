import {combineReducers} from 'redux';
import productsReducer from './products/productsReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
    products : productsReducer,
    product:productReducer,
    carts : cartReducer
})

export default rootReducer;