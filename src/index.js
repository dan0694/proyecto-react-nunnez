import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1VhodxNMieUVIFGtDdPnqXtNBD18Ous",
  authDomain: "fitbuddy-c6efb.firebaseapp.com",
  projectId: "fitbuddy-c6efb",
  storageBucket: "fitbuddy-c6efb.appspot.com",
  messagingSenderId: "178675998339",
  appId: "1:178675998339:web:489eba27f9ab5676b1c5b6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ORIGINAL
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
