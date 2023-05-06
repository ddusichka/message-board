import { React, useState } from "react";
import AnonSignIn from "../components/AnonSignIn";
import EmailSignIn from "../components/EmailSignIn";
import EmailSignInButton from "../components/EmailSignInButton";
import GoogleSignIn from "../components/GoogleSignIn";

const style = {
  container: `flex-1 h-screen justify-center ml-10 mt-10`,
  wrapper: `text-center space-y-8`,
};

const LoginPage = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  function showForm() {
    setShowEmailForm(true);
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.wrapper}>
          {!showEmailForm ? (
            <div>
              <AnonSignIn />
              <EmailSignInButton showEmailForm={showForm} />
              <GoogleSignIn />
            </div>
          ) : (
            <EmailSignIn />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
