import React from "react";
import MessageBoard from "../components/MessageBoard.js";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `flex-1 mx-auto`,
};

const ChatPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { channel } = useParams();

  return (
    <div className={style.appContainer}>
      {user ? <MessageBoard channel={channel} /> : navigate("/login")}
    </div>
  );
};

export default ChatPage;
