import React from 'react';
import PaginationBtn from './PaginationBtn';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../features/movie/movieSlice';


function Pagination() {
    const totalPages = 3712;
    const limit = 5;

    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.movie.currentPage);

    const goToPage = (page) => {
        dispatch(setPage(page))
    }

    const currentGroup = Math.ceil(currentPage / limit);
    const start = (currentGroup - 1) * limit + 1;
    const end = Math.min(start + limit - 1, totalPages);


     const handlePrev = () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    };

    return (
        <div className="flex items-center justify-center py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-black">

            <div className="flex flex-wrap items-center gap-2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full shadow-2xl">


                <button 
                onClick={() => goToPage(1)}
                    className="hidden md:block px-5 py-2 text-xs font-black text-gray-300 hover:text-[#FFB800] uppercase tracking-tighter transition-colors">
                    First
                </button>

                <button 
                onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-5 py-2 text-xs font-black text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#FFB800] hover:to-[#FF6B00] hover:text-white rounded-full transition-all disabled:opacity-30 disabled:hover:bg-white/5">
                    <span className="text-lg">←</span> Prev
                </button>


                <div className="flex items-center gap-1">
                    {Array.from({ length: end - start + 1 }, (_, i) => start + i)
                        .map((num) => (
                            <PaginationBtn
                                key={num}
                                number={num}
                                onClick={() => goToPage(num)}
                                className={
                                    currentPage === num
                                        ? 'bg-gradient-to-r from-[#FFB800] to-[#FF6B00] text-white shadow-[0_0_15px_rgba(255,184,0,0.3)]'
                                        : 'bg-white/5 text-white hover:bg-white/10 hover:text-[#FFB800]'
                                }
                            />
                        ))}
                </div>


                <button onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-5 py-2 text-xs font-black text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#FFB800] hover:to-[#FF6B00] hover:text-white rounded-full transition-all disabled:opacity-30">
                    Next <span className="text-lg">→</span>
                </button>

                <button onClick={() => goToPage(totalPages)}
                    className="hidden md:block px-5 py-2 text-xs font-black text-gray-300 hover:text-[#FFB800] uppercase tracking-tighter transition-colors">
                    Last
                </button>
            </div>
        </div>
    );
}

export default Pagination;








