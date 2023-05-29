import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const style = {
  par: `ml-5 mt-5 flex-auto`,
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none mt-4`,
};

const HomePage = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  return (
    <>
      {user ? (
        <div className={style.par}>
          <p>Welcome to the message board!</p>
          <p>Select a channel from the list on the left.</p>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default HomePage;
