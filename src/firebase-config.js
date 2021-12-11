// Import the functions you need from the SDKs you need
<<<<<<< HEAD
import "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js"; 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
=======
import firebase from 'firebase'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
>>>>>>> 8b17061 (23 created signin.jsx, added routing to index.js)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCcZIJBLhLbzj33bYwvXlee54wQLpDoTvA",
  authDomain: "meet-the-he.firebaseapp.com",
  projectId: "meet-the-he",
  storageBucket: "meet-the-he.appspot.com",
  messagingSenderId: "1082620090385",
  appId: "1:1082620090385:web:43aa6ea13d9405d6f779b0",
  measurementId: "G-L29QQH45QP"
};

// Initialize Firebase
<<<<<<< HEAD
const fb_app = initializeApp(firebaseConfig); // returns an app 
const analytics = getAnalytics(fb_app);
//export {firebase};
export {fb_app};
=======
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {firebase};
>>>>>>> 8b17061 (23 created signin.jsx, added routing to index.js)
