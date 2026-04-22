import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Play, Calendar, Clock } from 'lucide-react';
import DetailPageAddInfoCard from './DetailPageAddInfoCard';
import SimilarMovies from './SimilarMovies';

function DetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsloading(true);
      try {
        const response = await fetch(
          `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
        );
        const json = await response.json();
        if (json.data && json.data.movie) {
          setMovie(json.data.movie);
        }
      } catch (error) {
        console.error("API Fetch Error:", error);
      } finally {
        setIsloading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="h-screen bg-[#020214] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#FFB800] border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-white text-xl mt-4 font-medium">Loading.....</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#01011f] text-white font-sans">
     
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 lg:col-span-4 flex justify-center">
          <div className="relative group rounded-2xl overflow-hidden border border-amber-400 shadow-[0_0_60px_rgba(255,184,0,0.7)]">
            <img
              src={movie.large_cover_image}
              alt={movie.title}
              className="w-full h-120 object-cover transform transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-[#FFB800]">
              <Star size={20} fill="currentColor" />
              <span className="text-2xl text-white font-bold">{movie.rating || "N/A"}</span>
            </div>
            <h1 className="text-5xl font-extrabold">{movie.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-200">
              <div className="flex items-center gap-2"><Calendar size={18} /><span>{movie.year}</span></div>
              <div className="flex items-center gap-2"><Clock size={18} /><span>{movie.runtime} min</span></div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {movie.genres?.map((g, i) => (
                  <span key={i} className="text-white text-xs font-medium bg-amber-900/20 border border-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)] px-3.5 py-1 rounded-full uppercase tracking-wider animate-[bounce_3s_ease-in-out_infinite]">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold border-l-4 border-[#FFB800] pl-4">Storyline</h3>
            <p className="text-gray-300 mt-2 italic">{movie.description_full || "No description available"}</p>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <button className="group relative flex items-center gap-3 px-10 py-3.5 bg-[#FFB800] font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]">
              <Play className="w-4 h-4 fill-current" /><span>Watch Now</span>
            </button>
            <button className="px-10 py-3.5 bg-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-full border border-white/20 backdrop-blur-md hover:bg-white hover:text-[#02021C] transition-all">
              Download
            </button>
          </div>
        </div>
      </div>

 
      {movie.yt_trailer_code && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-[#FFB800] rounded-full shadow-[0_0_10px_#FFB800]"></div>
            <h2 className="text-2xl font-bold uppercase italic text-white">Official <span className="text-[#FFB800]">Trailer</span></h2>
          </div>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`} title="YouTube trailer" allowFullScreen></iframe>
          </div>
        </div>
      )}

   
      <SimilarMovies type="movies" movieId={id} />
      <SimilarMovies type="cast" data={movie?.cast} />

      
      <div className="max-w-7xl mx-auto px-8 py-12 pb-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-6 w-1.5 bg-[#FFB800] rounded-full shadow-[0_0_10px_#FFB800]"></div>
          <h2 className="text-2xl font-extrabold tracking-tight uppercase italic text-white">
            Technical <span className="text-[#FFB800]">Specs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DetailPageAddInfoCard 
            title="Movie Details" 
            items={[
              { label: "Date Uploaded:", value: movie.date_uploaded?.split(' ')[0] || "N/A" },
              { label: "MPA Rating:", value: movie.mpa_rating || "Not Rated" },
              { label: "Language:", value: movie.language?.toUpperCase() || "N/A" },
              { label: "Runtime:", value: `${movie.runtime} Minutes` }
            ]} 
          />

          <DetailPageAddInfoCard 
            title="Engagement & Files" 
            items={[
              { label: "Total Likes:", value: movie.like_count?.toLocaleString() || "0" },
              { label: "Download Count:", value: movie.download_count?.toLocaleString() || "0" },
              { label: "IMDb Code:", value: movie.imdb_code || "N/A" },
              { label: "Year Produced:", value: movie.year }
            ]} 
          />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
