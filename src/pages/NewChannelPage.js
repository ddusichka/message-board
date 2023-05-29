import { React, useState } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const style = {
  main: `ml-5 mt-5`,
  button: `bg-blue-500 hover:bg-blue-600 text-white rounded h-10 w-20 text-center text-base block cursor-pointer select-none mt-8`,
  label: `block text-gray-700 text-sm font-bold mb-2 mt-4 text-left`,
  input: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
};

const NewChannelPage = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  async function create() {
    // TODO:
    await setDoc(doc(db, "channels", name), {
      description: desc,
      createdDate: serverTimestamp(),
    });
    navigate(`/channels/${name}`);
  }

  return (
    <div className={style.main}>
      <h1>Create a new channel</h1>
      <div>
        <form>
          <label className={style.label} htmlFor="channel-name">
            Channel name
          </label>
          <input
            className={style.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={"General"}
            autoFocus={true}
          />
          <label className={style.label} htmlFor="channel-desc">
            Channel description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={style.input}
            name="Editor"
            cols="45"
            rows="2"
            placeholder={"A channel for..."}
          />
        </form>
        <button className={style.button} onClick={create}>
          Create
        </button>
      </div>
    </div>
  );
};

export default NewChannelPage;
