import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const SignOut = () => {
  const navigate = useNavigate();

  function signOut() {
    auth.signOut();
    navigate("/");
  }

  return (
    <button onClick={signOut} className={style.button}>
      Sign Out
    </button>
  );
};

export default SignOut;
