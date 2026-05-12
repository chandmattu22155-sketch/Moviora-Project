import React from 'react';

function PaginationBtn({ number, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center min-w-11.25 h-10 font-bold rounded-xl transition-all duration-300
        hover:bg-gradient-to-r hover:from-[#FFB800] hover:to-[#FF6B00] hover:text-white border border-white/10
        ${className}`}
    >
      {number}
    </button>
  );
}

export default PaginationBtn;




