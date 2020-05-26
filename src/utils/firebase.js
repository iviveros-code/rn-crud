import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWDCQwgyM4kpLRs5bdVXnuCQD_I55asYI",
  authDomain: "crud-firebase-rn-9b4dd.firebaseapp.com",
  databaseURL: "https://crud-firebase-rn-9b4dd.firebaseio.com",
  projectId: "crud-firebase-rn-9b4dd",
  storageBucket: "crud-firebase-rn-9b4dd.appspot.com",
  messagingSenderId: "871960185308",
  appId: "1:871960185308:web:4fed2a5e2063ec9cd06719",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
