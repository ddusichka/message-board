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
  main: `flex-col`,
  container: `grow-0 flex`,
};

function App() {
  const [user] = useAuthState(auth);

  return (
    <main className={style.main}>
      <Navbar />
      <div className={style.container}>
        {user ? <Sidebar /> : null}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/channels/:channel" element={<ChatPage />} />
          <Route path="/newChannel" element={<NewChannelPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
