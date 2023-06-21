// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpLno4ZCwkJX11TBITF6AR-iTo9Xvp5M0",
  authDomain: "proposalai.firebaseapp.com",
  projectId: "proposalai",
  storageBucket: "proposalai.appspot.com",
  messagingSenderId: "294347421435",
  appId: "1:294347421435:web:c470fd053de7ebe87de25e",
  measurementId: "G-HHYL8SBGS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);