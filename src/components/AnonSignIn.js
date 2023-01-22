import React from "react";
import { auth } from "../firebase.js";
import { signInAnonymously, updateProfile } from "firebase/auth";
import animals from "../animals.js";

const style = {
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none mt-4`,
};

const AnonSignIn = () => {
  // Sign in Anonymously
  const signin = () => {
    signInAnonymously(auth)
      .then((userCredential) => {
        // Signed in..
        const user = userCredential.user;
        console.log(user);

        const randomAnimal =
          animals[Math.floor(Math.random() * animals.length)];
        updateProfile(auth.currentUser, {
          displayName: "Anonymous ".concat(randomAnimal),
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
  };

  return (
    <div>
      <center>
        <button className={style.button} onClick={signin}>
          Sign In Anonymously
        </button>
      </center>
    </div>
  );
};

export default AnonSignIn;
