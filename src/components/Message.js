import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl float-left z-3`,
  name: `absolute ml-4 mt-2 text-gray-600 text-xs z-3`,
  date: `text-gray-400 text-xs text-right z-3`,
  sent: `bg-[#8E57AF] text-white`,
  received: `bg-[#e5e5ea] text-black`,
  you: `text-gray-400 italic`,
};

const DisplayName = ({ message }) => {
  const addYou =
    message.uid === auth.currentUser.uid ? (
      <span className={style.you}> (You)</span>
    ) : null;

  return (
    <p className={style.name}>
      {message.name ? message.name : message.email} {addYou}
    </p>
  );
};

const Message = ({ message }) => {
  if (!message.text || !message.timestamp) {
    // Return null if the message content is not available yet
    return null;
  }

  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  const timestamp = message.timestamp;

  return (
    <div>
      <DisplayName message={message} />
      <p className={style.date}>
        {timestamp ? timestamp.toDate().toString().substring(0, 24) : null}
      </p>
      <div className={`${style.message} ${messageClass}`}>
        <p className={messageClass}>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
