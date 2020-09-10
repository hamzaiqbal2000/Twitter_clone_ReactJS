import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALwMT5vIzxODDn2KVCt2VStoj5VlXZ9jI",
  authDomain: "twitter-clone-c8640.firebaseapp.com",
  databaseURL: "https://twitter-clone-c8640.firebaseio.com",
  projectId: "twitter-clone-c8640",
  storageBucket: "twitter-clone-c8640.appspot.com",
  messagingSenderId: "256701956454",
  appId: "1:256701956454:web:5a4c6110df0145e3b008a7",
  measurementId: "G-L6ETBM6ZF6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
