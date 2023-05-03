import React from "react";
import AnonSignIn from "../components/AnonSignIn";
import EmailSignIn from "../components/EmailSignIn";
import GoogleSignIn from "../components/GoogleSignIn";

const style = {
  container: `flex-1 h-screen justify-center ml-10 mt-10`,
  wrapper: `text-center space-y-8`,
};

const LoginPage = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.wrapper}>
          <AnonSignIn />
          <EmailSignIn />
          <GoogleSignIn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
