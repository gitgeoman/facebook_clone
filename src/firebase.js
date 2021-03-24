import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqe3u87jlaBD8hHzG9eHVmynvtIgVJRMA",
  authDomain: "facebook-clone-f665f.firebaseapp.com",
  databaseURL: "https://facebook-clone-f665f-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-f665f",
  storageBucket: "facebook-clone-f665f.appspot.com",
  messagingSenderId: "530365971572",
  appId: "1:530365971572:web:7c56d4cf991d2b85f22521",
  measurementId: "G-2LHETQCY7J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
