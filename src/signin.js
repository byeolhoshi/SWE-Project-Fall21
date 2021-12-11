import {fb_app} from "/src/firebase-config.js";
/* const SignIn =()=>{

    const SignInWithFirebase =()=>{
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <button onClick={SignInWithFirebase}>Sign In</button>
    )
}

export default SignIn */

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider(); 

signInWithPopup(auth, provider)
  .then((result) => {
    console.log("ASTER THIS SHIT IS BEING CALLED");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
document.getElementById("signInButton").onclick = signInWithPopup(auth, provider); 