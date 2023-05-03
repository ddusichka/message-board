import React, { useState, useEffect, useRef } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const style = {
  container: `flex h-screen justify-center`,
  wrapper: `text-center space-y-4`,
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none mt-4`,
};

const ChannelsPage = () => {
  const [channels, setChannels] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "channels"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let channels = [];
      querySnapshot.forEach((doc) => {
        channels.push({ ...doc.data(), id: doc.id });
      });
      setChannels(channels);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.container}>
        <div className={style.wrapper}>
          <h2>Select a channel</h2>
          {channels &&
            channels.map((channel) => (
              <div>
                <Link className={style.button} to={`/channels/${channel.id}`}>
                  {channel.id}
                </Link>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default ChannelsPage;
