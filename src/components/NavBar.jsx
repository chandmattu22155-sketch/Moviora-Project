import React, { useState } from "react";
import NavBarTitle from "./NavBarTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function NavBar({ onSearch = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-100 w-full">
      <div className="bg-[#02021C] backdrop-blur-xl border-b border-white/7 flex items-center justify-between px-6 md:px-12 h-20">

     
        <h1 className="text-[#FFB800] text-3xl md:text-5xl font-black tracking-tighter cursor-pointer ">
          MOVI<span className="text-[#FFFFFF]">ORA</span>
        </h1>

     
        <div className="hidden lg:block">
          <NavBarTitle />
        </div>

  
        <div className="relative flex-1 max-w-45 md:max-w-xs mx-4 group">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFB800] text-xs transition-all duration-300 group-focus-within:text-white"
          />

          <input
            type="text"
            placeholder="Search Movies, genres, directors..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full font-bold pl-11 pr-4 py-2 text-[13px] text-white placeholder:text-gray-300 
                       outline-none transition-all duration-500
                       hover:bg-white/10 hover:border-[#FFB800]/50
                       focus:bg-[#02021C] focus:border-[#FFB800] focus:ring-4 focus:ring-[#FFB800]/20 
                       focus:shadow-[0_0_20px_rgba(255,184,0,0.2)]"
          />
          
         
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#FFB800] transition-all duration-500 group-focus-within:w-[80%] opacity-50"></div>
        </div>

      
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:bg-[#FFB800] hover:text-[#02021C] rounded-xl transition-all duration-300"
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

   
      {menuOpen && (
        <div className="lg:hidden bg-[#02021C] border-b border-white/5 px-6 py-6 animate-in slide-in-from-top duration-300">
          <NavBarTitle />
        </div>
      )}
    </div>
  );
}

export default NavBar;