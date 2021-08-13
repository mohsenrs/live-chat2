import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCygtYPOgGWi4a_IA2XHLf3e8X9wn1wGKk',
  authDomain: 'vue3-project-3b2e9.firebaseapp.com',
  projectId: 'vue3-project-3b2e9',
  storageBucket: 'vue3-project-3b2e9.appspot.com',
  messagingSenderId: '404731811937',
  appId: '1:404731811937:web:8902fb195befba87d6f220',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.severTimestamp;

export { projectFirestore, timestamp };
