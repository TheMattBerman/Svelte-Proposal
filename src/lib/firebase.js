import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCpLno4ZCwkJX11TBITF6AR-iTo9Xvp5M0",
  authDomain: "proposalai.firebaseapp.com",
  projectId: "proposalai",
  storageBucket: "proposalai.appspot.com",
  messagingSenderId: "294347421435",
  appId: "1:294347421435:web:c470fd053de7ebe87de25e",
  measurementId: "G-HHYL8SBGS5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();