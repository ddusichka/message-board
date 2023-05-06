import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const style = {
  button: `mt-[-5px]`,
};

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    navigate("/home");
  };

  return (
    <center>
      <GoogleButton className={style.button} onClick={googleSignIn} />
    </center>
  );
};

export default GoogleSignIn;
