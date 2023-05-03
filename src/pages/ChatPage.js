import React from "react";
import MessageBoard from "../components/MessageBoard.js";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `flex-1 mx-auto text-center`,
  // set max width: max-w-[728px]
  sectionContainer: `flex flex-col mx-auto  bg-gray-100 shadow-xl border relative`,
};

const ChatPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { channel } = useParams();

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <br></br>
        {user ? <MessageBoard channel={channel} /> : navigate("/login")}
      </section>
    </div>
  );
};

export default ChatPage;
