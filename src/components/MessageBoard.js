import React, { useState, useEffect, useRef } from "react";
import {
  query,
  collection,
  orderBy,
  limit,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] relative overflow-auto max-h-[77vh]	`,
  header: `text-left ml-5 font-bold`,
  text: `text-left ml-5 mb-5`,
};

const MessageBoard = ({ channel }) => {
  const [messages, setMessages] = useState([]);
  const [description, setDescription] = useState();
  const scroll = useRef();
  getDescription();

  async function getDescription() {
    const docRef = doc(db, `channels/${channel}`);
    const document = await getDoc(docRef);

    setDescription(document.data().description);
  }

  useEffect(() => {
    const q = query(
      collection(db, `channels/${channel}/messages`),
      orderBy("timestamp", "asc"),
      limit(20)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [channel]);

  return (
    <>
      <main className={style.main} scroll={scroll}>
        <h2 className={style.header}>Welcome to #{channel}!</h2>
        <h4 className={style.text}>{description}</h4>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>

      <SendMessage channel={channel} scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default MessageBoard;
