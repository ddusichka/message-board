import React, { useState, useEffect } from "react";
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
  channelInfo: `sticky top-20 bg-white items-center px-2 py-4 z-10`,
  messages: `flex-grow overflow-y-scroll px-4 py-2 flex flex-col p-[10px] z-3`,
  header: `ml-5 font-bold z-10`,
  text: `ml-5`,
};

const MessageBoard = ({ channel }) => {
  const [messages, setMessages] = useState([]);
  const [description, setDescription] = useState();
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
    <main className={style.sectionContainer}>
      <div className={style.channelInfo}>
        <h2 className={style.header}>Welcome to #{channel}!</h2>
        <h4 className={style.text}>{description}</h4>
      </div>
      <div className={style.messages}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} channel={channel} />
          ))}
      </div>
      <SendMessage channel={channel} />
    </main>
  );
};

export default MessageBoard;
