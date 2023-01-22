import React from "react";
import Navbar from "./components/Navbar";
import MessageBoard from "./components/MessageBoard";
import SignIn from "./components/SignIn";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        <br></br>
        {user ? <MessageBoard /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
