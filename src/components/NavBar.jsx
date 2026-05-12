import React, { useState } from "react";
import NavBarTitle from "./NavBarTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/movie/movieSlice";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.movie.search);

  const handleSearch = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <div className="sticky top-0 z-100 w-full">
      <div className="bg-linear-to-r from-purple-900 via-blue-900 to-black shadow-xl backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 md:px-12 h-20">

        <h1 className="text-white  text-3xl md:text-5xl font-black tracking-tighter cursor-pointer">
          Prime<span className="text-[#FFB800]">Cinema</span>
        </h1>

        <div className="hidden lg:block">
          <NavBarTitle />
        </div>

        <div className="relative flex-1 max-w-45 md:max-w-xs mx-4 group">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFB800] text-xs transition-all duration-300 group-focus-within:text-[#FF6B00]"
          />

          <input
            type="text"
            value={searchValue} 
            placeholder="Search Movies, genres, directors..."
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-white/10 rounded-xl border-2 border-purple-500/30 font-bold pl-11 pr-4 py-2 text-[13px] text-white placeholder:text-white/60 
                       outline-none focus:border-[#FFB800] transition-all duration-500 focus:shadow-lg focus:shadow-amber-500/20"
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:bg-[#FFB800] hover:text-purple-900 rounded-xl transition-all duration-300"
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-linear-to-r from-purple-900 via-blue-900 to-black border-b border-white/10 px-6 py-6 animate-in slide-in-from-top duration-300">
          <NavBarTitle />
        </div>
      )}
    </div>
  );
}

export default NavBar;
