import {LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT,IS_LOGGED, REGISTER_SUCCESS, REGISTER_ERROR} from './authType';
import {auth,db} from '../../config/FbConfig';

export const login_success = () => {
    return {
        type :LOGIN_SUCCESS,
        // payload: user,
        error: ''
    }
}

export const login_error = (errMsg) => {
    return {
        type :LOGIN_ERROR,
        // payload: {},
        error:errMsg
    }
}


export const logout = () => {
    return {
        type : LOGOUT
    }
}

export const register_success = () => {
    return {
        type: REGISTER_SUCCESS,
        error: ''
    }
}

export const register_error = (errMsg) => {
    return {
        type: REGISTER_ERROR,
        error : errMsg
    }
}

export const signIn = (email,password) => {
    return (dispatch => {
        
    auth
        .signInWithEmailAndPassword(email,password)
        .then( (res) => {
            // console.log(auth)
        //     auth.onAuthStateChanged((user) => {
        //         if(user){
                // const user = auth.user;
                // dispatch(login_success(user))
                dispatch(login_success)
        //         } 
        //         else{
        //             // const user = {};
        //             dispatch(login_success(user))
        //         }
        //    })
        }).catch(error => {
            const errorMsg = error.message
            dispatch(login_error(errorMsg))
        })
      
    })  
    }

export const signOut = () => {
    return {
        type : LOGOUT,
    }
}

export const isLogged = (uid) => {
    
    return {
        type : IS_LOGGED,
        payload : uid,
    }
}

export const signup = (newUser) => {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(res => {
            
            return db.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName
            })

        })
        .then(() => {
            dispatch(register_success)
        })
        .catch(error => {
            dispatch(register_error(error.message))
        })
    }
}