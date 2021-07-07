
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDyX8VCKlF75x6SXI9qxXOTE06WMT_JSoU",
    authDomain: "clone-c3c84.firebaseapp.com",
    projectId: "clone-c3c84",
    storageBucket: "clone-c3c84.appspot.com",
    messagingSenderId: "932071434341",
    appId: "1:932071434341:web:98e20688f772fd09c73e8c",
    measurementId: "G-J2WKWB1KBE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };