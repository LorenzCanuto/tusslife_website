import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyATdKga4BXEWEWbDmCL77qeaRFqyzfvQ_o",
  authDomain: "in-development-tuss-website.firebaseapp.com",
  databaseURL: "https://in-development-tuss-website.firebaseio.com",
  projectId: "in-development-tuss-website",
  storageBucket: "in-development-tuss-website.appspot.com",
  messagingSenderId: "349314703579",
  appId: "1:349314703579:web:0763b62589af89420d6cfe",
  measurementId: "G-ZWCLHTFBEQ",
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb,db}