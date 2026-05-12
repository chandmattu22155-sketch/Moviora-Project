import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, image, rating, year, id, genres, quality }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (id) {
      navigate(`/detail/${id}`);
    }
  };

  const handleImageError = (e) => {
    e.target.src = `https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?text=${title}`;
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative w-60 rounded-2xl overflow-hidden cursor-pointer group border-2 border-white/10 
                      hover:border-[#FFB800] hover:shadow-[0_0_30px_rgba(255,184,0,0.5),0_0_60px_rgba(255,184,0,0.2)] 
                      transition-all duration-500 ease-out bg-gradient-to-br from-purple-900/50 to-blue-900/50">
        
        {/* Rating Badge - Top Right */}
        <div className="absolute top-3 right-3 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-xl 
                        bg-black/70 backdrop-blur-md border border-[#FFB800]/60
                        shadow-[0_0_15px_rgba(255,184,0,0.4)] opacity-0 scale-75 
                        group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#FFB800]" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white font-bold text-sm">{rating || "N/A"}</span>
        </div>

      
        <img
          src={image || "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=500&auto=format&fit=crop"} 
          alt={title} 
          onError={handleImageError}
          className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700 ease-in-out"
        />
        
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent 
                        opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
     
       
        <button 
          onClick={(e) => {
            e.stopPropagation(); 
            handleCardClick();
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30  
                     px-6 py-2.5 rounded-xl font-bold text-[13px] tracking-wide uppercase 
                     bg-gradient-to-r from-[#FFB800] to-[#FF6B00] 
                     text-white shadow-lg
                     hover:shadow-[0_0_25px_rgba(255,184,0,0.6)] 
                     opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]">
          <span className="flex items-center gap-2">
            Watch Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </button>

       
        <div className="absolute bottom-0 left-0 p-5 w-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h1 className="text-lg font-black text-white leading-tight mb-2 drop-shadow-lg 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
                         line-clamp-2">
            {title.length > 25 ? title.substring(0, 22) + '...' : title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <span className="text-gray-300 font-medium text-xs bg-white/10 px-2 py-1 rounded-full">
              {year}
            </span>
            <span className="text-[#FFB800] text-xs font-medium bg-white/10 px-2 py-1 rounded-full">
              {genres}
            </span>
            <span className="text-gray-400 text-xs font-medium bg-white/10 px-2 py-1 rounded-full">
              {quality}
            </span>
          </div>
        </div>

        
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#FFB800]/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#FFB800]/20 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-2xl"></div>
      </div>
    </div>
  );
}

export default Card;