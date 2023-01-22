import React from "react";
import SignOut from "./SignOut";
import c4c from "../c4c.jpeg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `ml-[-50px] text-white text-3xl`,
  hide: `invisible`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <img src={c4c} alt="Logo" width="60" />
      <h1 className={style.heading}>Message Board!</h1>
      {user ? <SignOut /> : <br></br>}
    </div>
  );
};

export default Navbar;
