import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NewChannelPage from "./pages/NewChannelPage";

const style = {
  main: `flex flex-initial`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <main>
      <Navbar />
      <div className={style.main}>
        {user ? <Sidebar /> : null}
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/channels/:channel" element={<ChatPage />} />{" "}
          <Route path="/newChannel" element={<NewChannelPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
