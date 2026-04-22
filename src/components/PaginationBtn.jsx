import React from 'react';

function PaginationBtn({ number, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center min-w-11.25 h-10 font-bold rounded-xl transition-all duration-300
        hover:bg-[#FFB800] hover:text-[#02021C] border border-white/10
        ${className}`}
    >
      {number}
    </button>
  );
}

export default PaginationBtn;
