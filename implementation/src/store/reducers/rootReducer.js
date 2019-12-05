import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // syncing firestore
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import wireframerReducer from './wireframerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  wireframes: wireframerReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;