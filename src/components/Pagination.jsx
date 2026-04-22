import React from 'react';
import PaginationBtn from './PaginationBtn';

function Pagination({ currentPage, setCurrentPage }) {
    const totalPages = 3712;
    const limit = 5;

    const currentGroup = Math.ceil(currentPage / limit);
    const start = (currentGroup - 1) * limit + 1;
    const end = Math.min(start + limit - 1, totalPages);

    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

    return (
        <div className="flex items-center justify-center py-16 bg-[#02021C]">
      
            <div className="flex flex-wrap items-center gap-2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full shadow-2xl">
                
            
                <button onClick={() => setCurrentPage(1)}
                    className="hidden md:block px-5 py-2 text-xs font-black text-gray-200 hover:text-white uppercase tracking-tighter transition-colors">
                    First
                </button>

                <button onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-5 py-2 text-xs font-black text-white bg-white/5 hover:bg-[#FFB800] hover:text-[#02021C] rounded-full transition-all disabled:opacity-30 disabled:hover:bg-transparent">
                    <span className="text-lg">←</span> Prev
                </button>

               
                <div className="flex items-center gap-1">
                    {Array.from({ length: end - start + 1 }, (_, i) => start + i)
                        .map((num) => (
                            <PaginationBtn
                                key={num}
                                number={num}
                                onClick={() => setCurrentPage(num)}
                                className={
                                    currentPage === num
                                        ? 'bg-[#FFB800] text-[#02021C] shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                                        : 'bg-transparent text-white'
                                }
                            />
                        ))}
                </div>

          
                <button onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-5 py-2 text-xs font-black text-white bg-white/5 hover:bg-[#FFB800] hover:text-[#02021C] rounded-full transition-all disabled:opacity-30">
                    Next <span className="text-lg">→</span>
                </button>

                <button onClick={() => setCurrentPage(totalPages)}
                    className="hidden md:block px-5 py-2 text-xs font-black text-gray-200 hover:text-white uppercase tracking-tighter transition-colors">
                    Last
                </button>
            </div>
        </div>
    );
}

export default Pagination;




