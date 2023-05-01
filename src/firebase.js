// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcjvnyLjmVygw002xkJuxJpf3jiZ74HcU",
    authDomain: "netflix-clone-e969f.firebaseapp.com",
    projectId: "netflix-clone-e969f",
    storageBucket: "netflix-clone-e969f.appspot.com",
    messagingSenderId: "485187235227",
    appId: "1:485187235227:web:c0bc2fc55ad9f6f5bcc53e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
