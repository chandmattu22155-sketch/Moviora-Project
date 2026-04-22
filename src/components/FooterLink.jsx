import React from 'react';


export const FooterLink = ({ name, href = "#" }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-300 hover:text-[#FFB800] transition-colors duration-300 inline-block group text-sm"
      >
        {name}
      </a>
    </li>
  );
};