import firebase from 'firebase';
import firebaseui from 'firebaseui';

/**
 * Firebase config
 */
const config = {
  apiKey: 'AIzaSyBNkP2kUq1L9FRGAsRQI2r-Jfif0KbZfUs',
  authDomain: 'vmltest-99a35.firebaseapp.com',
  databaseURL: 'https://vmltest-99a35.firebaseio.com',
  projectId: 'vmltest-99a35',
  storageBucket: 'vmltest-99a35.appspot.com',
  messagingSenderId: '910972980089'
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;

db.settings({ timestampsInSnapshots: true });

const meals = db.collection('meals');
const customers = db.collection('customers');

/**
 * Firebase auth
 */
const ui = new firebaseui.auth.AuthUI(firebase.auth());

export { db, ui, currentUser, meals, customers };
