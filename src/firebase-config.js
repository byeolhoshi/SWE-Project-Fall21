// Import the functions you need from the SDKs you need
//import * as firebase from 'firebase/app'; 
import { initializeApp } from '../node_modules/firebase/firebase-app.js';
import { initializeAnalytics , getAnalytics } from '../node_modules/firebase/firebase-analytics.js';
import { getFirestore, doc, getDoc } from '../node_modules/firebase/firebase-firestore-lite.js';
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
const fb_app = initializeApp(firebaseConfig); // returns an app 
initializeAnalytics(fb_app); 
const analytics = getAnalytics(fb_app);

async function loadCity(name) {
  const cityDoc = doc(fb_app, `cities/${name}`);
  const snapshot = await getDoc(cityDoc); 
  return{
    id: snapshot.id, 
    data: snapshot.data(),
  };
}; 
console.log(analytics); 
//export {firebase};
export {fb_app};
