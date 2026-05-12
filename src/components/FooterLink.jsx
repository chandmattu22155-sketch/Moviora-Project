import React from 'react';
import { Link } from 'react-router-dom';

export const FooterLink = ({ name, href = "#" }) => {
  return (
    <li className="group">
      <Link 
        to={href} 
        className="text-gray-400 hover:text-[#FFB800] transition-all duration-300 inline-flex items-center gap-1.5 text-xs group-hover:translate-x-1"
      >
        <svg className="w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#FFB800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
        {name}
      </Link>
    </li>
  );
};
