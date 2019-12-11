import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
  apiKey: "AIzaSyBSdfPolq5nr_LoREYsbVG5YWw_aWeEFso",
  authDomain: "akadakia-wireframer.firebaseapp.com",
  databaseURL: "https://akadakia-wireframer.firebaseio.com",
  projectId: "akadakia-wireframer",
  storageBucket: "akadakia-wireframer.appspot.com",
  messagingSenderId: "603161158450",
  appId: "1:603161158450:web:e29628dbff172f2564ed2b",
  measurementId: "G-LYQK8XCZ34"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;