import React from "react";
import { auth } from "../firebase";

const style = {
  appContainer: `flex-1 mx-auto`,
  sectionContainer: `flex flex-col mx-auto  bg-gray-100 shadow-xl border relative`,
};

const ProfilePage = () => {
  console.log(auth.currentUser);
  return (
    <div className={style.appContainer}>
      <div>
        <h3>Welcome, {auth.currentUser.displayName}</h3>
        <p>Email: {auth.currentUser.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
