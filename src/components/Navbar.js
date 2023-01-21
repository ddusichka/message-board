import React from "react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import c4c from "../c4c.jpeg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
  image: `mr-4`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <img className={style.image} src={c4c} alt="Logo" width="60" />
      <h1 className={style.heading}>Message Board!</h1>
      {user ? <SignOut /> : null}
    </div>
  );
};

export default Navbar;
