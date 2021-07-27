import { LOGIN_SUCCESS,LOGIN_ERROR, LOGOUT,REGISTER_SUCCESS, REGISTER_ERROR, IS_LOGGED } from "./authType";
import {auth} from '../../config/FbConfig'
const initialState = {
    // user : {},
    uid: '',
    authError : '',
}


const authReducer = (state = initialState, action) => {
    
    switch(action.type){
        case LOGIN_SUCCESS : 
        console.log('user-logged-in')  
        return {       
            ...state,
            authError: '' 
        }
        case LOGIN_ERROR :
            console.log('login-failed') 
        return {
            type :LOGIN_ERROR,
           
            authError : action.error
        }

   case LOGOUT:
       auth
       .signOut(); 
       console.log('user signout')
    return{
        ...state, 
        // user: {},
       }
       case REGISTER_SUCCESS :
           return{
              ...state  
           }
        case REGISTER_ERROR : 
        return {
            ...state,
            authError: action.error
        }   
      case IS_LOGGED:
          return{
            
          ...state,
          uid: action.payload

          } 
     
   default : return state 
}

}

export default authReducer;