// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9s0bguXjHbzt67XQ1GMu6gl4A1yBrvn0",
    authDomain: "netflix-clone-d14ae.firebaseapp.com",
    projectId: "netflix-clone-d14ae",
    storageBucket: "netflix-clone-d14ae.appspot.com",
    messagingSenderId: "536019190282",
    appId: "1:536019190282:web:c75ea1199c7f62f81d55f3",
    measurementId: "G-SJPEE3HX0P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;