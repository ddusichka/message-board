import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

const style = {
  container: `flex h-screen justify-center`,
  wrapper: `text-center space-y-4`,
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none`,
};

// const EmailSignInButton = () => {
//   return (
//     <button type="button" className={style.button} onClick={emailSignIn()}>
//       Sign in with Email
//     </button>
//   );
// };

// const EmailSignUpButton = () => {
//   return (
//     <button type="button" className={style.button} onClick={emailSignUp()}>
//       Sign up with Email
//     </button>
//   );
// };

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {/* <EmailSignIn /> */}
        <GoogleButton onClick={googleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
