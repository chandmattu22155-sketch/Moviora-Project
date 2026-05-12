import { useNavigate } from "react-router-dom"; 
import { useQuery} from "@tanstack/react-query";
import { fetchSuggestionMovies } from "../services/movieApi";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setSelectedMovieId } from "../features/movie/movieSlice";

function SimilarMovies({movieId}) {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(setSelectedMovieId(movieId));
    }
  }, [movieId, dispatch]);

  const {data: items,  isLoading, error} = useQuery({
    queryKey: ["suggestionMovies", movieId],
    queryFn: () =>  fetchSuggestionMovies(movieId),
    enabled: !!movieId,
  })

  const handleSimilarMovieClick = (id) => {
    dispatch(setSelectedMovieId(id))
    navigate(`/detail/${id}`, { 
      replace: true, 
      state: { fromSimilar: true }
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="w-16 h-16 border-4 border-t-[#FFB800] border-white/10 rounded-full animate-spin"></div>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00] mt-4 font-bold animate-pulse uppercase tracking-widest">
          Loading Similar Movies
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30">
          <svg className="w-12 h-12 text-red-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-400 font-bold">Failed to load similar movies</p>
        </div>
      </div>
    );
  } 

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black py-10 mx-16 px-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-8 bg-gradient-to-b from-[#FFB800] to-[#FF6B00] rounded-full shadow-[0_0_10px_#FFB800]"></div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00] uppercase tracking-tight italic">
          Similar Movies
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSimilarMovieClick(item.id)}
            className="cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10 transition-all duration-500 hover:border-[#FFB800] hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]">
              <img 
                src={item.medium_cover_image} 
                alt={item.title} 
                className="w-full h-100 object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-4 relative z-10">
                <h3 className="text-white font-bold text-sm truncate group-hover:text-[#FFB800] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] mt-1.5">
                  <span className="text-[#FFB800] font-semibold">★ {item.rating || "N/A"}</span>
                  <span className="text-gray-300">{item.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarMovies;

