import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "./cartType"

const initialState = {
    product : [],
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}



const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_BASKET :
            return{
                ...state,
                product : [...state.product, action.payload]
            }
            case REMOVE_FROM_BASKET:
             const index = state.product.findIndex(
                 (basketItem) => basketItem.id === action.payload
             );
             console.log(index);
             let newBasket = [...state.product]
             if(index >= 0){
                 newBasket.splice(index, 1);
             }else{
                 console.warn(`cant remove product (id : ${action.payload}) as its not in basket`)
             }          
            return {
                ...state,
                   product : newBasket
                }
        default : return state    
    }
}

export default cartReducer;