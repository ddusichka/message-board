import { React, useState } from "react";
import { auth } from "../firebase";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

const style = {
  appContainer: `flex-1 mx-auto ml-5 mt-5`,
  button: `bg-blue-500 hover:bg-blue-600 text-white  rounded h-10 w-24 text-center text-base block rounded cursor-pointer select-none mt-8`,
  label: `block text-gray-700 text-sm font-bold mb-2 mt-4 text-left`,
  input: `shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
};

const ProfilePage = () => {
  const user = auth.currentUser;
  const [initialName, setInitialName] = useState(auth.currentUser.displayName);
  const [initialEmail] = useState(auth.currentUser.email);
  const [name, setName] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [newPassword, setNewPassword] = useState("");

  async function updateName() {
    try {
      if (initialName !== name) {
        await updateProfile(user, { displayName: name, photoURL: null });
        console.log("Name has been updated!");
        setInitialName(name);
        await setDoc(doc(db, "users", email), { name: name });
      }

      if (initialEmail !== email) {
        await updateEmail(user, email);
        console.log("Email changed!");
        await deleteDoc(doc(db, "users", initialEmail));
        await setDoc(doc(db, "users", email), { name: name });
      }

      if (newPassword !== "") {
        await updatePassword(user, newPassword);
        console.log("Password successfully changed.");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const form = () => {
    return (
      <div>
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
            placeholder={email}
          />
          <label className={style.label} htmlFor="email-address">
            Display name
          </label>
          <input
            className={style.input}
            type="name"
            label="Display name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={name}
          />
          <label className={style.label} htmlFor="new-password">
            New password
          </label>
          <input
            className={style.input}
            type="password"
            label="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </form>
        <button className={style.button} onClick={updateName}>
          Update
        </button>
      </div>
    );
  };

  return (
    <div className={style.appContainer}>
      <div>
        <h2>Welcome, {initialName}</h2>
        {email ? (
          <h5>Edit any profile information here.</h5>
        ) : (
          <h5>You don't have a profile because you're anonymous!</h5>
        )}
        {email ? form() : null}
      </div>
    </div>
  );
};

export default ProfilePage;
