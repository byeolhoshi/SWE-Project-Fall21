// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);