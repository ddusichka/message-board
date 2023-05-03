import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import ChannelsPage from "./pages/ChannelsPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const style = {
  main: `flex flex-initial`,
};

function App() {
  return (
    <main>
      <Navbar />
      {/* <div style={{ display: "flex", height: "100vh" }}> */}
      <div className={style.main}>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/channels/:channel" element={<ChatPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
