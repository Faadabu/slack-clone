import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBy3L7fUxjFik_nFx3YLADY0zzSQGVR6Oc",
    authDomain: "slack-clone-7d45c.firebaseapp.com",
    projectId: "slack-clone-7d45c",
    storageBucket: "slack-clone-7d45c.appspot.com",
    messagingSenderId: "662856606593",
    appId: "1:662856606593:web:da4e7b945166a08c233e80"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };