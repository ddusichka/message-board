import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const style = {
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-24 text-center text-base block rounded-none cursor-pointer select-none mt-6`,
  form: `bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`,
  label: `block text-gray-700 text-sm font-bold mb-2 mt-2`,
  input: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
  flex: `flex items-center justify-between`,
};

const EmailSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log(name);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <form className={style.form}>
        <div>
          <label className={style.label} htmlFor="email-address">
            Email address
          </label>
          <input
            className={style.input}
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <input
            className={style.input}
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <div>
          <label className={style.label}> Name (optional)</label>
          <input
            className={style.input}
            type="name"
            label="Display name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Display name"
          />
        </div>

        <div className={style.flex}>
          <button className={style.button} onClick={signUp}>
            Sign up
          </button>

          <button className={style.button} onClick={signIn}>
            Sign in
          </button>
        </div>
      </form>

      {/* <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p> */}
    </div>
  );
};

export default EmailSignIn;
