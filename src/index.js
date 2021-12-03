/**
 OIIIIII!! [11/30/21]
 This doc is a WIP! I took this from a tutorial, so we don't need [Emphasis on DONT NEED] a lot of the stuff here!
 This sets up the google authentication
 I'm keeping a lot of this here until I have more time to go through and see what's dependent on one another.
 Code from this tutorial: https://firebase.google.com/codelabs/firebase-web
 */

 'use strict';

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
 import {
   getStorage,
   ref,
   uploadBytesResumable,
   getDownloadURL,
 } from 'firebase/storage';
 import { getPerformance } from 'firebase/performance';
 
 import { getFirebaseConfig } from './firebase-config.js';
 
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
 
 // Requests permissions to show notifications.
 async function requestNotificationsPermissions() {
   // TODO 11: Request permissions to send notifications.
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
/*  function checkSignedInWithMessage() {
   // Return true if the user is signed in Firebase
   if (isUserSignedIn()) {
     return true;
   }
 
   // Display a message to the user using a Toast.
   var data = {
     message: 'You must sign-in first',
     timeout: 2000,
   };
   signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
   return false;
 }
 
 // Resets the given MaterialTextField.
 function resetMaterialTextfield(element) {
   element.value = '';
   element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
 } */
 
 // Template for messages.
 /* var MESSAGE_TEMPLATE =
   '<div class="message-container">' +
   '<div class="spacing"><div class="pic"></div></div>' +
   '<div class="message"></div>' +
   '<div class="name"></div>' +
   '</div>';
  */
 // Adds a size to Google Profile pics URLs.
 /* function addSizeToGoogleProfilePic(url) {
   if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
     return url + '?sz=150';
   }
   return url;
 } */
 
 // A loading image URL.
 var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';
 
 // Delete a Message from the UI.
 /* function deleteMessage(id) {
   var div = document.getElementById(id);
   // If an element for that message exists we delete it.
   if (div) {
     div.parentNode.removeChild(div);
   }
 } */
 
 /* function createAndInsertMessage(id, timestamp) {
   const container = document.createElement('div');
   container.innerHTML = MESSAGE_TEMPLATE;
   const div = container.firstChild;
   div.setAttribute('id', id);
 
   // If timestamp is null, assume we've gotten a brand new message.
   // https://stackoverflow.com/a/47781432/4816918
   timestamp = timestamp ? timestamp.toMillis() : Date.now();
   div.setAttribute('timestamp', timestamp);
 
   // figure out where to insert new message
   const existingMessages = messageListElement.children;
   if (existingMessages.length === 0) {
     messageListElement.appendChild(div);
   } else {
     let messageListNode = existingMessages[0];
 
     while (messageListNode) {
       const messageListNodeTime = messageListNode.getAttribute('timestamp');
 
       if (!messageListNodeTime) {
         throw new Error(
           `Child ${messageListNode.id} has no 'timestamp' attribute`
         );
       }
 
       if (messageListNodeTime > timestamp) {
         break;
       }
 
       messageListNode = messageListNode.nextSibling;
     }
 
     messageListElement.insertBefore(div, messageListNode);
   }
 
   return div;
 } */
 
 // Displays a Message in the UI.
 /* function displayMessage(id, timestamp, name, text, picUrl, imageUrl) {
   var div =
     document.getElementById(id) || createAndInsertMessage(id, timestamp);
 
   // profile picture
   if (picUrl) {
     div.querySelector('.pic').style.backgroundImage =
       'url(' + addSizeToGoogleProfilePic(picUrl) + ')';
   }
 
   div.querySelector('.name').textContent = name;
   var messageElement = div.querySelector('.message');
 
   if (text) {
     // If the message is text.
     messageElement.textContent = text;
     // Replace all line breaks by <br>.
     messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
   } else if (imageUrl) {
     // If the message is an image.
     var image = document.createElement('img');
     image.addEventListener('load', function () {
       messageListElement.scrollTop = messageListElement.scrollHeight;
     });
     image.src = imageUrl + '&' + new Date().getTime();
     messageElement.innerHTML = '';
     messageElement.appendChild(image);
   }
   // Show the card fading-in and scroll to view the new message.
   setTimeout(function () {
     div.classList.add('visible');
   }, 1);
   messageListElement.scrollTop = messageListElement.scrollHeight;
   messageInputElement.focus();
 } */
 
 // Enables or disables the submit button depending on the values of the input
 // fields.
 /* function toggleButton() {
   if (messageInputElement.value) {
     submitButtonElement.removeAttribute('disabled');
   } else {
     submitButtonElement.setAttribute('disabled', 'true');
   }
 }
 
 // Shortcuts to DOM Elements.
 var messageListElement = document.getElementById('messages');
 var messageFormElement = document.getElementById('message-form');
 var messageInputElement = document.getElementById('message');
 var submitButtonElement = document.getElementById('submit');
 var imageButtonElement = document.getElementById('submitImage');
 var imageFormElement = document.getElementById('image-form');
 var mediaCaptureElement = document.getElementById('mediaCapture');
 var userPicElement = document.getElementById('user-pic');
 var userNameElement = document.getElementById('user-name');
 var signInButtonElement = document.getElementById('sign-in');
 var signOutButtonElement = document.getElementById('sign-out');
 var signInSnackbarElement = document.getElementById('must-signin-snackbar');

 const firebaseAppConfig = getFirebaseConfig();
 
 // TODO 12: Initialize Firebase Performance Monitoring
 
 initializeApp(firebaseAppConfig);
 initFirebaseAuth();