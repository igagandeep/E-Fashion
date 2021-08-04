import { LOGIN_SUCCESS,LOGIN_ERROR, LOGOUT,REGISTER_SUCCESS, REGISTER_ERROR, IS_LOGGED, RESET } from "./authType";
import {auth} from '../../config/FbConfig'
const initialState = {
    // user : {},
    uid: '',
    email: '',
    registerError : '',
    loginError: ''
}


const authReducer = (state = initialState, action) => {
    
    switch(action.type){
        case LOGIN_SUCCESS : 
        console.log('user-logged-in')  
        return {       
            ...state,
            loginError: '' 
        }
        case LOGIN_ERROR :
            console.log('login-failed') 
        return {
            type :LOGIN_ERROR,
           
            loginError : action.error
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
              ...state,
              registerError: '',  
           }
        case REGISTER_ERROR : 
        return {
            ...state,
            registerError: action.error
        }   
      case IS_LOGGED:
          return{
            
          ...state,
          uid: action.uid,
          email: action.email,

          } 
          
        case RESET:
            return{
                ...state,
                loginError: '',
                registerError: '',
            }  
     
   default : return state 
}

}

export default authReducer;