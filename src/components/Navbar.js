import React from "react";
import SignOut from "./SignOut";
import chatBubble from "../chatBubble.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `bg-purple-200 h-20 sticky top-0 flex justify-between items-center p-4 z-50`,
  heading: `text-black text-3xl`,
  hide: `invisible`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <img src={chatBubble} alt="Logo" width="60" />
      <h1 className={style.heading}>Message Board</h1>
      {user ? <SignOut /> : null}
    </div>
  );
};

export default Navbar;
