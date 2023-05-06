import React from "react";

const style = {
  par: `ml-5 mt-5 flex-auto`,
  button: `bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded h-12 w-[240px] text-center text-base block rounded-none cursor-pointer select-none mt-4`,
};

const HomePage = () => {
  return (
    <div className={style.par}>
      <p>Welcome to the message board!</p>
    </div>
  );
};

export default HomePage;
