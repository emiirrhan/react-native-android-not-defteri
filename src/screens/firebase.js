import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCrtefuPtOkEjtIUisxBDxDeoK2MEebDLQ",
    authDomain: "awesomeproject2-32551.firebaseapp.com",
    projectId: "awesomeproject2-32551",
    storageBucket: "awesomeproject2-32551.appspot.com",
    messagingSenderId: "910723275961",
    appId: "1:910723275961:web:33c6998a69632f17b7cf68",
    measurementId: "G-1QENCDQ0K3"
  };
  const app = initializeApp(firebaseConfig);
  const getAnalytics = getAnalytics(app);

  const db = firebase.firestore();

  export default db;
