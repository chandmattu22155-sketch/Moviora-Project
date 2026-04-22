import React from "react";
import { useNavigate } from "react-router-dom";


function Card({ title, image, rating, year, id, movie, genres, quality }) {
  const navigate = useNavigate();

  const handleImageError = (e) => {
    e.target.src = `https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?text=${title}`;
  };

  return (
    <div>
      <div
        className="relative h-110 rounded-3xl overflow-hidden cursor-pointer group 
        border-2 border-transparent 
        hover:border-[#FFB800] 
        hover:shadow-[0_0_40px_rgba(255,184,0,0.6),0_0_80px_rgba(255,184,0,0.2),inset_0_0_20px_rgba(255,184,0,0.3)] 
        transition-all duration-500 ease-out"
      >

        <div
          className="absolute top-3 right-3 z-40 
  flex items-center gap-1 px-2 py-1 rounded-xl
  bg-black/60 backdrop-blur-md border border-[#FFB800]/40
  shadow-[0_0_10px_rgba(255,184,0,0.6)]

  opacity-0 scale-75  
  group-hover:opacity-100 group-hover:scale-100

  transition-all duration-300 ease-out"
        >
          <span className="text-[#FFB800] text-sm">★</span>
          <span className="text-white font-bold text-sm">{rating}</span>
        </div>


        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=500&auto=format&fit=crop"
          }
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out"
        />


        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

        <button
          onClick={() => navigate(`/detail/${id}`)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 
          px-5 py-2 rounded-2xl font-bold text-[12px] tracking-wide uppercase
          bg-slate-600/10 backdrop-blur-lg text-white border border-blue-400/30
          hover:bg-[#FFB800] hover:border-[#FFB800] hover:text-white
          hover:shadow-[0_0_25px_rgba(255,184,0,0.5)]
          opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
          transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]"
        >
          <span className="flex items-center gap-2">
            Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>


        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h1 className="text-xl font-extrabold text-white leading-tight mb-1 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {title}
          </h1>

          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <span className="text-gray-200 font-medium text-sm">
              {year}
            </span>

            <span className="text-[#FFB800] border-l border-gray-600 pl-3 text-sm font-medium">
              {genres}
            </span>

            <span className="text-gray-400 border-l border-gray-600 pl-3 text-sm font-medium">
              {quality}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;