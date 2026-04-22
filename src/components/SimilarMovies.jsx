import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CastCard } from "./CastCard"; 

function SimilarMovies({ movieId, type = "movies", data = null }) {
 
  
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
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) fetchItems();
  }, [movieId, data]);

  if (loading) return <div className="text-amber-400 text-xl p-10 justify-center flex  animate-pulse">Loading...</div>;
  if (items.length === 0) return null;

  return (
    <div className="bg-[#02021C] py-10 mx-16 px-6 ">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-8 bg-[#FFB800] rounded-full shadow-[0_0_10px_#FFB800]"></div>
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight italic">
          {type === "movies" ? "Similar Movies" : "Cast & Crew"}
        </h2>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-6">
        {items.map((item, index) => (
        item.id  ? (
            <Link key={item.id} to={`/detail/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
              <div className="relative overflow-hidden rounded-xl bg-[#0B0B22] border border-white/5 transition-all duration-300 hover:border-[#FFB800] hover:shadow-[0_0_20px_rgba(255,184,0,1.8)] hover:-translate-y-2">
                <img src={item.medium_cover_image} alt={item.title} className="w-full h-60 object-cover" />
                <div className="p-3">
                  <h3 className="text-white font-bold text-sm truncate">{item.title}</h3>
                  <div className="flex items-center gap-2 text-[11px] mt-1">
                    <span className="text-[#FFB800]">★ {item.rating}</span>
                    <span className="text-gray-200">{item.year}</span>
                  </div>
                </div>
              </div>
            </Link> 

          ) : (
            <CastCard
              key={index}
              name={item.name}
              role={item.character_name || "Cast"}
              image={item.url_small_image}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default SimilarMovies;



