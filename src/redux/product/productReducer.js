import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS } from "./productType";

const initialState = {
    loading: false,
    product : {},
    error : ''
} 


const productReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCT_REQUEST : 
        return {
            ...state,
            loading: true,
            product: {},
            error: '', 
        }

        case FETCH_PRODUCT_SUCCESS : 
        return {
            ...state,
            loading: false,
            product: action.payload,
            error: ''
        }
        case FETCH_PRODUCT_FAILURE :
            return {
                ...state,
                loading: false,
                products : {},
                error : action.error
            }

        default : return state
    }
}

export default productReducer;