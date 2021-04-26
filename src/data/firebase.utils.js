import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4cf2N5wm64GspSuh2DaPiGGidfJu2XfU",
    authDomain: "kings-clothing-6b3ca.firebaseapp.com",
    projectId: "kings-clothing-6b3ca",
    storageBucket: "kings-clothing-6b3ca.appspot.com",
    messagingSenderId: "151239121536",
    appId: "1:151239121536:web:91e89d5692a64fe6a2e465",
    measurementId: "G-74ZDLRNQPH"
  };

  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


