import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/movieApi";

function Movies() {
  const { search, currentPage, filters } = useSelector(
    (state) => state.movie
  );

  const { data: movies = [], isLoading, error } = useQuery({
    queryKey: ["movies", { page: currentPage, search, filters }],
    queryFn: fetchMovies,
    keepPreviousData: true,
  });

  const getBestQuality = (torrents) => {
    if (!torrents || torrents.length === 0) return "N/A";

    const order = { "2160p": 4, "1080p": 3, "720p": 2, "480p": 1 };

    return torrents.reduce((best, cur) =>
      order[cur.quality] > order[best.quality] ? cur : best
    ).quality;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] bg-linear-to-br from-purple-900 via-blue-900 to-black">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white/10 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-t-[#FFB800] border-r-[#FF6B00] border-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-transparent bg-clip-text bg-linear-to-r from-[#FFB800] to-[#FF6B00] mt-6 font-bold tracking-widest animate-pulse uppercase text-lg">
          Loading Amazing Movies...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 bg-linear-to-br from-purple-900 via-blue-900 to-black">
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-400 font-bold text-lg">
            {error.message || "Something went wrong"}
          </p>
          <p className="text-white/60 text-sm mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-14 bg-linear-to-br from-purple-900 via-blue-900 to-black min-h-screen">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase 
                       bg-linear-to-r from-[#FFB800] via-[#FF8C00] to-[#FF6B00] bg-clip-text text-transparent">
          {search ? (
            <>
              Search Results: <span className="text-white">{search}</span>
            </>
          ) : (
            <>
              Latest <span className="text-white">Movies</span>
            </>
          )}
        </h1>
        <div className="w-24 h-1 bg-linear-to-r from-[#FFB800] to-[#FF6B00] rounded-full mt-4 mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              image={movie.large_cover_image}
              title={movie.title}
              rating={movie.rating}
              year={movie.year}
              genres={movie.genres?.[0] || "N/A"}
              quality={getBestQuality(movie.torrents)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-32 border-2 border-dashed border-white/10 rounded-[3rem] bg-white/5 backdrop-blur-sm">
            <svg className="w-24 h-24 text-white/30 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <h2 className="text-3xl font-bold text-white mb-3 uppercase tracking-wide">
              No Movies Found!
            </h2>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              Try adjusting your search or clear the filters to see more results.
            </p>
          </div>
        )}
      </div>
      
     
      {movies.length > 0 && (
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            Showing <span className="text-[#FFB800] font-bold">{movies.length}</span> amazing movies
          </p>
        </div>
      )}
    </div>
  );
}

export default Movies;
