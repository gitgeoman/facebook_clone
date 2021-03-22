import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFRLsrMLV-qedRlrPW1q2K6zAI755CqOY",
  authDomain: "facebook-clone-63ad1.firebaseapp.com",
  projectId: "facebook-clone-63ad1",
  storageBucket: "facebook-clone-63ad1.appspot.com",
  messagingSenderId: "1029693929671",
  appId: "1:1029693929671:web:2967982a6dd54ae30be6e2",
  measurementId: "G-N8TEMEEY1Z",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
