import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi2XgQiB0QuPhqgqdfygynwvCAEczHNrU",
  authDomain: "my-blog-cd572.firebaseapp.com",
  projectId: "my-blog-cd572",
  storageBucket: "my-blog-cd572.appspot.com",
  messagingSenderId: "208894365639",
  appId: "1:208894365639:web:b000705c138dd61474d3e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
