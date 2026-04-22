import React from "react";
import { NavLink } from "react-router-dom";

function NavBarTitle() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Popular Now", path: "/popular" },
    { name: "Trending", path: "/trending" },
    { name: "Top Rated", path: "/top-rated" },
  ];

  
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
      {navLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `text-[16px] font-semibold cursor-pointer transition-all duration-300 
            ${isActive ? "text-[#FFB800]" : "text-white hover:text-[#FFB800]"}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBarTitle;
