import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB4_Oh_dwmqv3DZO9KnnTbDLu0KNKlJFOQ',
  authDomain: 'signal-clone-b9702.firebaseapp.com',
  projectId: 'signal-clone-b9702',
  storageBucket: 'signal-clone-b9702.appspot.com',
  messagingSenderId: '59964656414',
  appId: '1:59964656414:web:1942302ea13ffae651170f'
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const db = firebase.firestore();
