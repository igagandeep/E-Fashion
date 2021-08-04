import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaSxVfqYFexh07IQDqccE5BehRHZWUC-0",
    authDomain: "eshop-c257f.firebaseapp.com",
    projectId: "eshop-c257f",
    storageBucket: "eshop-c257f.appspot.com",
    messagingSenderId: "443894290616",
    appId: "1:443894290616:web:d3b684fd1c243b83ffbc4d"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export {db, auth};