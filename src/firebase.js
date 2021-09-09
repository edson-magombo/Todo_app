import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
     // For Firebase JS SDK v7.20.0 and later, measurementId is optional

     apiKey: "AIzaSyAhrCnalzICXVj2EfhDjtcg7elj_ulPqAM",
     authDomain: "campus-maintenance-system.firebaseapp.com",
     projectId: "campus-maintenance-system",
     storageBucket: "campus-maintenance-system.appspot.com",
     messagingSenderId: "868607336648",
     appId: "1:868607336648:web:ec00f1c3e32d7355c145fd",
     measurementId: "G-3F7Y3T4KVW"
   
}
);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider, storage };
export default db;

