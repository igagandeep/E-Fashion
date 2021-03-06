import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from './productsType';
import axios from 'axios';
        
// action creator to send request to retreive products
export const fetch_products_request = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}

// action creator for completion of fetching products
export const fetch_products_success = (products) => {
    return {
        type : FETCH_PRODUCTS_SUCCESS,
        payload : products, 
    }
}

// action creator to show error of fetching products
export const fetch_products_failure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload : error
    }
}

export const fetch_products = () => {
    return  (dispatch) => {
        dispatch(fetch_products_request());
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            const products = res.data;
            dispatch(fetch_products_success(products))
        })
        .catch(error => {
            const errorMsg = error.message;
            dispatch(fetch_products_failure(errorMsg))
        })
    }
}