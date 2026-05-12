import React from "react";
import { NavLink } from "react-router-dom";

function NavBarTitle() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "TV Shows", path: "/TvShows" },
    { name: "Trending", path: "/trending" },
    { name: "Browser Movies", path: "BrowserMovies" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
      {navLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `text-[20px] font-bold cursor-pointer transition-all duration-300 relative
            ${isActive 
              ? "text-[#FFB800] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB800] after:to-[#FF6B00]" 
              : "text-white/80 hover:text-[#FFB800]"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBarTitle;



