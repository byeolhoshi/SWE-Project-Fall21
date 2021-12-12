/**
 Code from this tutorial: https://firebase.google.com/codelabs/firebase-web
 */

 'use strict';
 import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import ReturningUserProfile from './ReturningUserProfile';
  import NewUserProfile from './NewUserProfile';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import HomePage from './HomePage';

 var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';
 
 var userPicElement = document.getElementById('user-pic');
 var userNameElement = document.getElementById('user-name');
 var signInButtonElement = document.getElementById('sign-in');
 var signOutButtonElement = document.getElementById('sign-out');
 var signInSnackbarElement = document.getElementById('must-signin-snackbar');

 const firebaseAppConfig = getFirebaseConfig();
 
 if (isUserSignedIn()){
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
 }else{
   ReactDOM.render(
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
 initializeApp(firebaseAppConfig);
 initFirebaseAuth();
 loadMessages();
