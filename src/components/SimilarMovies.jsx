// SimilarMovies.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

function SimilarMovies({ movieId, data = null }) {
  const navigate = useNavigate(); // navigate hook
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setItems(data);
      setLoading(false);
      return;
    }

    const fetchItems = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://movies-api.accel.li/api/v2/movie_suggestions.json?movie_id=${movieId}`
        );
        const json = await res.json();
        if (json.data && json.data.movies) {
          setItems(json.data.movies);
        } else {
          setItems([]);
        }
      } catch (err) {
        console.error("Error:", err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) fetchItems();
  }, [movieId, data]);

  
  const handleSimilarMovieClick = (movieId) => {
    
    navigate(`/detail/${movieId}`, { 
      replace: true, 
      state: { fromSimilar: true }
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 bg-[#02021C]">
        <div className="w-16 h-16 border-4 border-t-[#FFB800] border-white/10 rounded-full animate-spin"></div>
        <p className="text-[#FFB800] mt-4 font-bold animate-pulse uppercase tracking-widest">
          Loading Similar Movies
        </p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#02021C] py-10 mx-16 px-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-8 bg-[#FFB800] rounded-full shadow-[0_0_10px_#FFB800]"></div>
        <h2 className="text-3xl font-bold text-white uppercase tracking-tight italic">
          Similar Movies
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSimilarMovieClick(item.id)}
            className="cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#0B0B22] border border-white/5 transition-all duration-500 hover:border-[#FFB800] hover:shadow-[0_0_20px_rgba(255,184,0,1.9)] hover:-translate-y-2">
              <img 
                src={item.medium_cover_image} 
                alt={item.title} 
                className="w-full h-100 object-cover" 
              />
              <div className="p-3">
                <h3 className="text-white font-bold text-sm truncate">{item.title}</h3>
                <div className="flex items-center gap-2 text-[11px] mt-1">
                  <span className="text-[#FFB800]">★ {item.rating || "N/A"}</span>
                  <span className="text-gray-100">{item.year}</span>
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
