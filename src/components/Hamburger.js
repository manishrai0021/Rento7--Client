import React, { useState } from "react";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowmenu) => !prevShowmenu);
  };

  return (
    <div onClick={toggleMenu} className="sm:hidden">
      <div>
        <div
          className={`w-5 h-[3px] bg-white mb-1 ${
            showMenu ? "duration-300 rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-[3px] bg-white ${showMenu ? "opacity-0" : ""}`}
        ></div>
        <div
          className={`w-5 h-[3px] bg-white mt-1 ${
            showMenu ? " duration-300 -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      <div
        className={
          !showMenu
            ? " absolute right-[0.20px] -top-[150px] flex flex-col items-center gap-2 p-2 w-full overflow-hidden font-semibold mt-[2.5rem] bg-white border-2 text-xl  transform transition-top duration-500 ease-in-out -z-10 "
            : "flex flex-col items-center gap-2 p-2 w-full overflow-hidden font-semibold mt-[2.5rem] bg-white border-b-2 border-blue-300 shadow-lg text-xl absolute right-[0.20px] top-6 transform transition-top duration-700 ease-in z-10"
        }
      >
        <a href="/">Home</a>
        <a href="/products">Rooms</a>
        {/* <a href="/search">Add Rooms</a> */}
        <a href="/search">Login</a>
        <a href="/search">Register</a>
      </div>
    </div>
  );
};

export default Hamburger;
