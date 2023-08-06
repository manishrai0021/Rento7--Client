import React, { useState } from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-[3rem] bg-blue-700 flex justify-between items-center p-4">
        {/* Logo */}
      <div className="text-2xl font-semibold text-white">Room Finder</div>
      {/* Nav Links */}
      <div className="hidden sm:flex">
        <a href="/" className="hover:border-b-4 border-white pb-1">
          Home
        </a>
        <a href="/products" className="hover:border-b-4 border-white pb-1">
          Rooms
        </a>
        {/* <a href="/search" className="hover:border-b-4 border-white pb-1">
          Add Rooms
        </a> */}
        <a href="/search" className="hover:border-b-4 border-white pb-1">
          Login
        </a>
        <a href="/search" className="hover:border-b-4 border-white pb-1">
          Registration
        </a>
      </div>

      <Hamburger/>
    </div>
  );
};

export default NavBar;
