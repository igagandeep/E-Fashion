import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from "./rootReducer";
// import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
// import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
// import {FbConfig} from '../config/FbConfig';




const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk),
        // ReactReduxFirebaseProvider(FbConfig)
    ));


export default store;