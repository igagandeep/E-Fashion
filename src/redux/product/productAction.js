import {FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE} from './productType';
import axios from 'axios';

export const fetch_product_request = () => {
    return {
        type: FETCH_PRODUCT_REQUEST,
    }
} 

export const fetch_product_success = (product) => {
    return {
        type : FETCH_PRODUCT_SUCCESS,
        payload : product, 
    }
}

export const fetch_product_failure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload : error
    }
}


export const fetch_product = (id) => {
    return (dispatch) => {
        dispatch(fetch_product_request())
        axios.get('https://fakestoreapi.com/products/' + id)
        .then(res => {
            const product = res.data;
            dispatch(fetch_product_success(product));
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetch_product_failure(errorMsg));
        })
    }
} 