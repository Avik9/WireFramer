import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // syncing firestore
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import WireFramerReducer from './WireFramerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  WireFrame: WireFramerReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;