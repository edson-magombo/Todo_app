import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
// import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyAr_MlXSRslZqZy6H0aOU4jd0oXGqtTj6A",
     authDomain: "facility-maintenance-system.firebaseapp.com",
     databaseURL: "https://facility-maintenance-system-default-rtdb.firebaseio.com",
     projectId: "facility-maintenance-system",
     storageBucket: "facility-maintenance-system.appspot.com",
     messagingSenderId: "104422828666",
     appId: "1:104422828666:web:57064b80c81af909c0a9c3",
     measurementId: "G-ZK59Z8Q5H7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;

