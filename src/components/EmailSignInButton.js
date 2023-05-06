import React from "react";

const style = {
  mainbutton: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none mt-4 mb-5`,
};
const EmailSignInButton = ({ showEmailForm }) => {
  return (
    <button className={style.mainbutton} onClick={showEmailForm}>
      Continue with email
    </button>
  );
};

export default EmailSignInButton;
