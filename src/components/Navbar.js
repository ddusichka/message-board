import React from "react";
import SignOut from "./SignOut";
import chatBubble from "../chatBubble.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `bg-purple-200 h-20 sticky top-0 flex items-center p-4 z-50`,
  img: `justify-start mr-4`,
  heading: `flex-1 text-black text-3xl text-center`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.nav}>
      <img className={style.img} src={chatBubble} alt="Logo" width="60" />
      <h1 className={style.heading}>Message Board</h1>
      {user && <SignOut />}
    </div>
  );
};

export default Navbar;
