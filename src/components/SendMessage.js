import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  main: `sticky bg-white bottom-0 items-center px-2 py-2 z-10`,
  form: `h-14 w-full flex text-xl bottom-0`,
  input: `caret-black w-full text-xl p-3 bg-gray-300 text-black`,
  button: `w-[20%] bg-[#455DBB] text-white`,
};

const SendMessage = ({ channel, scroll }) => {
  var [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input === "" || input.length > 128) {
      alert("Please enter a valid message between 0 and 128 characters!");
      return;
    }

    const { uid, displayName } = auth.currentUser;

    const Filter = require("bad-words"),
      filter = new Filter();
    input = filter.clean(input);

    await addDoc(collection(db, `channels/${channel}/messages`), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className={style.main}>
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Message"
        />
        <button className={style.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
