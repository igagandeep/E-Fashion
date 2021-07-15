import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productsType"

const initialState = {
    loading: false,
    products : [],
    error : ''
} 


const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST : 
        return {
            ...state,
            loading: true 
        }

        case FETCH_PRODUCTS_SUCCESS : 
        return {
            ...state,
            loading: false,
            products: action.payload,
            error: ''
        }
        case FETCH_PRODUCTS_FAILURE :
            return {
                ...state,
                loading: false,
                products : [],
                error : action.error
            }

        default : return state
    }
}

export default productsReducer;