import React, { useEffect, useState } from "react";
import Card from "./Card";

function Movies({ currentPage, searchVal, filters }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const getBestQuality = (torrents) => {
    if (!torrents || torrents.length === 0) return 'N/A';
    const qualityOrder = { '2160p': 4, '1080p': 3, '720p': 2, '480p': 1 };
    const best = torrents.reduce((best, current) => 
      (qualityOrder[current.quality] > qualityOrder[best.quality] ? current : best)
    );
    return best.quality;
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const { quality, genre, rating, limit, sort_by } = filters;

        let url = `https://movies-api.accel.li/api/v2/list_movies.json?page=${currentPage}`;

        if (searchVal) url += `&query_term=${encodeURIComponent(searchVal.trim())}`;
        if (quality && quality !== "All" && quality !== "") url += `&quality=${quality}`;
        if (genre && genre !== "All" && genre !== "") url += `&genre=${genre}`;
        if (rating && rating !== "All" && rating !== "") url += `&minimum_rating=${rating}`;
        if (limit && limit !== "All" && limit !== "") url += `&limit=${limit}`;
        if (sort_by && sort_by !== "All" && sort_by !== "") url += `&sort_by=${sort_by}`;

        console.log("Fetching URL:", url); // Debug

        const response = await fetch(url, { signal });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        if (data.status === "ok" && data.data.movies) {
          setMovies(data.data.movies);
        } else {
          setMovies([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
          setError("Something went wrong. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => controller.abort();
  }, [currentPage, searchVal, filters]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] bg-[#02021C]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/10 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-[#FFB800] border-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-[#FFB800] mt-4 font-bold tracking-widest animate-pulse uppercase">
          Scanning Database...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 bg-[#02021C]">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-16 bg-[#02021C] min-h-screen">
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-12 uppercase 
                     bg-[#FFB800] bg-clip-text text-transparent
                     drop-shadow-[0_0_20px_rgba(255,184,0,0.2)]">
        {searchVal ? (
          <>Search Result: <span className="text-white">{searchVal}</span></>
        ) : (
          <>Latest <span className="text-white">Movies</span></>
        )}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              image={movie.large_cover_image}
              title={movie.title}
              rating={movie.rating}
              year={movie.year}
              genres={movie.genres ? movie.genres[0] : "N/A"}
              quality={getBestQuality(movie.torrents)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem]">
            <h2 className="text-3xl font-bold text-white mb-2 uppercase">
              No Masterpieces Found!
            </h2>
            <p className="text-gray-400 text-lg">
              Try a different title or clear your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
