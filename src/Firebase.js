import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgjvEtQmPUkDxDR_Tg2Wy9mX9Q-zsnitY",
    authDomain: "twitter-177ad.firebaseapp.com",
    projectId: "twitter-177ad",
    storageBucket: "twitter-177ad.appspot.com",
    messagingSenderId: "275925918149",
    appId: "1:275925918149:web:5762659bf660a303ce2bac"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export default db;