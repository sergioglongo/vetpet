importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');
// import { initializeApp } from "firebase/app"
// import { getMessaging  } from "firebase/messaging"
// import firebase from 'firebase/app';
// import 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJUL_EK77Eq0dA_PqVTc_qbTlfqnS-eFw",
  authDomain: "vetpet-2023.firebaseapp.com",
  projectId: "vetpet-2023",
  storageBucket: "vetpet-2023.appspot.com",
  messagingSenderId: "610252765642",
  appId: "1:610252765642:web:17844ad5f2a8d662b63733",
  measurementId: "G-D5GBQ6HMFJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();