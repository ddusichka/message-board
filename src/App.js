import React from "react";
import Navbar from "./components/Navbar";
import MessageBoard from "./components/MessageBoard";
import SignInOptions from "./components/SignInOptions";

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
        {/* Navbar */}
        <Navbar />
        <br></br>
        {user ? <MessageBoard /> : <SignInOptions />}
        {/* Chat component */}
      </section>
    </div>
  );
}

export default App;
