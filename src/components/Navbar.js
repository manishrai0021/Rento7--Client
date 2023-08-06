import React, { useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <div className="w-full h-[3rem] bg-blue-700 flex justify-between items-center p-4">
        {/* Logo */}
      <Link to='/' className="text-[28px] font-bold text-white">Room Finder</Link>
      {/* Nav Links */}
      <div className="hidden sm:flex gap-4 text-[18px] text-white font-semibold">
        <Link to="/" className="hover:border-b-2 border-white pb-1">
          Home
        </Link>
        <Link to="/products" className="hover:border-b-2 border-white pb-1">
          Rooms
        </Link>
        <Link to="/search" className="hover:border-b-2 border-white pb-1">
          Login
        </Link>
        <Link to="/search" className="hover:border-b-2 border-white pb-1">
          Registration
        </Link>
      </div>
      <Hamburger/>
    </div>
  );
};

export default NavBar;
