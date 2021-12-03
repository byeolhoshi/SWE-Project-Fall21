/**
 Code from this tutorial: https://firebase.google.com/codelabs/firebase-web
 */

 'use strict';
 import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import reportWebVitals from './reportWebVitals';
  import ReturningUserProfile from './ReturningUserProfile';
  import NewUserProfile from './NewUserProfile';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import HomePage from './HomePage';

  import { firebase } from './firebase-config.js';
  import { initializeApp } from 'firebase/app';
  import {
   getAuth,
   onAuthStateChanged,
   GoogleAuthProvider,
   signInWithPopup,
   signOut,
 } from 'firebase/auth';
 import {
   getFirestore,
   collection,
   addDoc,
   query,
   orderBy,
   limit,
   onSnapshot,
   setDoc,
   updateDoc,
   doc,
   serverTimestamp,
 } from 'firebase/firestore';
/*  import {
   getStorage,
   ref,
   uploadBytesResumable,
   getDownloadURL,
 } from 'firebase/storage'; */

 ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<NewUserProfile />} />
        <Route path="/returnUserProfile" element={<ReturningUserProfile />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

 import { getPerformance } from 'firebase/performance';
 
 import { getFirebaseConfig } from './firebase-config.js';
 import SignIn from './signin';
 
 // Signs-in Friendly Chat.
 async function signIn() {
   // Sign in Firebase using popup auth and Google as the identity provider.
   var provider = new GoogleAuthProvider();
   await signInWithPopup(getAuth(), provider);
 }
 
 // Signs-out of Friendly Chat.
 function signOutUser() {
   // Sign out of Firebase.
   signOut(getAuth());
 }
 
 // Initiate firebase auth
 function initFirebaseAuth() {
   // Listen to auth state changes.
   onAuthStateChanged(getAuth(), authStateObserver);
 }
 
 // Returns the signed-in user's profile Pic URL.
 function getProfilePicUrl() {
   return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
 }
 
 // Returns the signed-in user's display name.
 function getUserName() {
   return getAuth().currentUser.displayName;
 }
 
 // Returns true if a user is signed-in.
 function isUserSignedIn() {
   return !!getAuth().currentUser;
 }
 
 function authStateObserver(user) {
   if (user) {
     // User is signed in!
     // Get the signed-in user's profile pic and name.
     var profilePicUrl = getProfilePicUrl();
     var userName = getUserName();
 
     // Set the user's profile pic and name.
     userPicElement.style.backgroundImage =
       'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
     userNameElement.textContent = userName;
 
     // Show user's profile and sign-out button.
     userNameElement.removeAttribute('hidden');
     userPicElement.removeAttribute('hidden');
     signOutButtonElement.removeAttribute('hidden');
 
     // Hide sign-in button.
     signInButtonElement.setAttribute('hidden', 'true');
 
     // We save the Firebase Messaging Device token and enable notifications.
     saveMessagingDeviceToken();
   } else {
     // User is signed out!
     // Hide user's profile and sign-out button.
     userNameElement.setAttribute('hidden', 'true');
     userPicElement.setAttribute('hidden', 'true');
     signOutButtonElement.setAttribute('hidden', 'true');
 
     // Show sign-in button.
     signInButtonElement.removeAttribute('hidden');
   }
 }
 
 // Returns true if user is signed-in. Otherwise false and displays a message.
 // A loading image URL.
 var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';
 
 
 // A loading image URL.
 var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';
 
 /* function toggleButton() {
   if (messageInputElement.value) {
     submitButtonElement.removeAttribute('disabled');
   } else {
     submitButtonElement.setAttribute('disabled', 'true');
   }
 }
 
 // Shortcuts to DOM Elements.
/*  var messageListElement = document.getElementById('messages');
 var messageFormElement = document.getElementById('message-form');
 var messageInputElement = document.getElementById('message');
 var submitButtonElement = document.getElementById('submit');
 var imageButtonElement = document.getElementById('submitImage');
 var imageFormElement = document.getElementById('image-form');
 var mediaCaptureElement = document.getElementById('mediaCapture'); */
 var userPicElement = document.getElementById('user-pic');
 var userNameElement = document.getElementById('user-name');
 var signInButtonElement = document.getElementById('sign-in');
 var signOutButtonElement = document.getElementById('sign-out');
 var signInSnackbarElement = document.getElementById('must-signin-snackbar');
*/
 const firebaseAppConfig = getFirebaseConfig();
 
<<<<<<< HEAD
 if (isUserSignedIn()){
   return (
     ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<NewUserProfile />} />
          <Route path="/returnUserProfile" element={<ReturningUserProfile />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
)
   )
 }else{
   return(
     <React.StrictMode>
       <BrowserRouter>
        <Router>
          <Switch>
            <Route path="/login" component ={SignIn}/>
          </Switch>
        </Router>
       </BrowserRouter>
     </React.StrictMode>
   )
 }
 
 reportWebVitals();
=======
 // TODO 12: Initialize Firebase Performance Monitoring
 getPerformance();
>>>>>>> aa1de11 (22-Performance management)
 initializeApp(firebaseAppConfig);
 initFirebaseAuth();
 loadMessages();
 initFirebaseAuth();
 reportWebVitals();
