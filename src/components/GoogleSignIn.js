import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const GoogleSignIn = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <center>
      <GoogleButton onClick={googleSignIn} />
    </center>
  );
};

export default GoogleSignIn;
