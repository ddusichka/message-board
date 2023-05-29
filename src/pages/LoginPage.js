import { React, useState } from "react";
import AnonSignIn from "../components/AnonSignIn";
import EmailSignIn from "../components/EmailSignIn";
import EmailSignInButton from "../components/EmailSignInButton";
import GoogleSignIn from "../components/GoogleSignIn";

const style = {
  container: `flex-1 h-screen flex justify-center ml-10 mt-10 space-y-8`,
};

const LoginPage = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  function showForm() {
    setShowEmailForm(true);
  }

  return (
    <div className={style.container}>
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
  );
};

export default LoginPage;
