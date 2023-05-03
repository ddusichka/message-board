import React, { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SideBar = () => {
  // const { collapseSidebar } = useProSidebar();
  const [channels, setChannels] = useState([]);

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
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to={"/home"} />}>Home</MenuItem>
          <MenuItem component={<Link to={"/profile"} />}>Profile</MenuItem>
          <SubMenu label="Channels">
            {channels &&
              channels.map((channel) => (
                <MenuItem
                  component={
                    <Link to={`/channels/${channel.id}`}>{channel.id}</Link>
                  }
                >
                  {channel.id}
                </MenuItem>
              ))}
          </SubMenu>
        </Menu>
      </Sidebar>
      {/*
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </div>
  );
};

export default SideBar;
