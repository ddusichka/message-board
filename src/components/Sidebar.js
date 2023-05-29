import React, { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const style = {
  main: `flex h-[calc(100vh-80px)] sticky top-[80px] z-10`,
};

const menuItemStyles = {
  backgroundColor: "#F2E8FE",
  root: {
    fontSize: "15px",
    fontWeight: 400,
  },
  SubMenuExpandIcon: {
    color: "#1d232a",
  },
  subMenuContent: ({ level }) => ({
    backgroundColor: "#F2E8FE",
  }),
  label: ({ open }) => ({
    fontWeight: open ? 400 : undefined,
  }),
};

const SideBar = () => {
  const [channels, setChannels] = useState([]);
  const [activePage, setActivePage] = useState(null);

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

  function handleActive(event) {
    const menuItem = event.target.closest(".ps-menuitem-root");
    console.log(menuItem);
    if (menuItem && !menuItem.classList.contains("active")) {
      menuItem.classList.add("active");

      if (activePage) activePage.classList.remove("active");
      setActivePage(menuItem);
    }
  }

  return (
    <div className={style.main}>
      <Sidebar backgroundColor="#F2E8FE">
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem component={<Link to={"/home"} onClick={handleActive} />}>
            Home
          </MenuItem>
          <MenuItem component={<Link to={"/profile"} onClick={handleActive} />}>
            Profile
          </MenuItem>
          <SubMenu label="Channels" defaultOpen={true}>
            {channels &&
              channels.map((channel) => (
                <MenuItem
                  key={channel.id}
                  component={
                    <Link
                      to={`/channels/${channel.id}`}
                      onClick={handleActive}
                    />
                  }
                >
                  {"#" + channel.id}
                </MenuItem>
              ))}
            <MenuItem
              component={<Link to={"/newChannel"} onClick={handleActive} />}
            >
              New channel
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
