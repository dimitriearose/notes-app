import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB61yhwlZOcaG-qwglHeapIdJFyTlu_umI",
    authDomain: "notes-app-5eada.firebaseapp.com",
    databaseURL: "https://notes-app-5eada.firebaseio.com",
    projectId: "notes-app-5eada",
    storageBucket: "notes-app-5eada.appspot.com",
    messagingSenderId: "501818131532",
    appId: "1:501818131532:web:eb3eba2746ca6435ec60e9",
    measurementId: "G-MQ9YJ2E42W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
