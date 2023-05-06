import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { auth } from "../firebase";

const style = {
  button: `bg-blue-500 hover:bg-blue-600 text-white  rounded h-12 w-24 text-center text-base block rounded-none cursor-pointer select-none mt-8`,
  outlineButton: `hover:bg-blue-600 text-black py-2 px-4 rounded h-12 w-24 text-center text-base block rounded-none cursor-pointer select-none mt-6`,
  form: `bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`,
  label: `block text-gray-700 text-sm font-bold mb-2 mt-4 text-left`,
  input: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
  flex: `flex`,
  error: `text-red-500`,
};

const EmailSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [existingUser, setExistingUser] = useState();
  const [error, setError] = useState();

  /* Check if a user with the given email already exists. */
  async function emailLookUp() {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      /* If we find a matching user... */
      setExistingUser(true);
      setName(docSnap.data().name);
    } else {
      setExistingUser(false);
    }
  }

  /* Sign up the new user. */
  const signUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setDoc(doc(db, "users", email), {
          name: name,
        });

        navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  /* Sign in an existing user. */
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  /* Form containing an email input. */
  const emailInput = () => {
    return (
      <div>
        <p>We'll check if you have an account and create one if you don't.</p>

        <form>
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
            placeholder="sarah@example.com"
          />
        </form>
        <div className={style.flex}>
          <button className={style.button} onClick={emailLookUp}>
            Continue
          </button>
        </div>
      </div>
    );
  };

  /* Form with a display name input and a password input, to be shown after the user has entered their email. */
  const passwordInput = () => {
    return (
      <div>
        <label className={style.label} htmlFor="password">
          Enter password
        </label>
        <input
          className={style.input}
          type="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter password"
        />
        {error ? <p className={style.error}>{error}</p> : null}
      </div>
    );
  };

  const nameInput = () => {
    return (
      <form show={true}>
        <label className={style.label}> Name</label>
        <input
          className={style.input}
          type="name"
          label="Display name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Sarah Smith"
          autofocus="true"
        />
      </form>
    );
  };

  /* Form used to sign in. */
  const signInForm = () => {
    return (
      <div>
        <p>Welcome back, {name}!</p>
        {passwordInput()}
        <button className={style.button} onClick={signIn}>
          Sign in
        </button>
      </div>
    );
  };

  /* Form used to sign up. */
  const signUpForm = () => {
    return (
      <div>
        <p>Enter your name and create a password.</p>
        {nameInput()}
        {passwordInput()}
        <button className={style.button} onClick={signUp}>
          Sign up
        </button>
      </div>
    );
  };

  return (
    <div>
      {!existingUser
        ? emailInput()
        : existingUser === true
        ? signInForm()
        : signUpForm()}
    </div>
  );
};

export default EmailSignIn;
