import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl bottom-00`,
  input: `caret-black w-full text-xl p-3 bg-gray-300 text-black outline-none border-none`,
  button: `w-[20%] bg-[#455DBB] text-white`,
};

const SendMessage = (scroll) => {
  var [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input === "" || input.length > 128) {
      alert("Please enter a valid message between 0 and 128 characters!");
      return;
    }

    const { uid, displayName, email } = auth.currentUser;

    console.log("unfiltered: " + input);

    const Filter = require("bad-words"),
      filter = new Filter();
    input = filter.clean(input);

    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      email: email,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
  );
};

export default SendMessage;
