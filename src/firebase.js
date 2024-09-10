import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBqm288IVFjRUwoEtBVet0ONYMsAAxX7XM',
  authDomain: 'cast-app-chat.firebaseapp.com',
  projectId: 'cast-app-chat',
  storageBucket: 'cast-app-chat.appspot.com',
  messagingSenderId: '780762228023',
  appId: '1:780762228023:web:79406d16ba03739c2c26b2',
  measurementId: 'G-W18LNW2RFR',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
