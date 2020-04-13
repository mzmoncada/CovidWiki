//Contains Firebase linking information
import Rebase from 're-base';
import firebase from 'firebase';

//hardcoding API keys; will need to change this in the future
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    //appId: "1:723175835530:web:f0179ecb581dfcd565aa73",
    //measurementId: "G-75RQHBT3WH"
}

//Firebase website has firebase.initializeApp(firebaseConfig);
// and firebase.analytics();
const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}