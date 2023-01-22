import React from "react";
import EmailSignIn from "./EmailSignIn";
import AnonSignIn from "./AnonSignIn";
import GoogleSignIn from "./GoogleSignIn";

const style = {
  container: `flex h-screen justify-center`,
  wrapper: `text-center space-y-8`,
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none`,
};

const SignIn = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <AnonSignIn />
        <GoogleSignIn />
        <EmailSignIn />
      </div>
    </div>
  );
};

export default SignIn;
