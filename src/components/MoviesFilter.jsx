import React, { useState, useEffect } from 'react';
import Dropdown_btn from './Dropdown_btn';
import { faCalendar, faStar, faListOl, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from "react-redux";
import { setFilters, clearFilters} from "../features/movie/movieSlice";

function MoviesFilter() {

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.movie.filters);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quality = {
    '': 'All',
    '480p': '480p',
    '720p': '720p',
    '1080p': '1080p',
    '2160p': '2160p',
    '3d': '3D'
  };
  
  const genres = {
    '': 'All',
    Action: 'Action',
    Adventure: 'Adventure',
    Animation: 'Animation',
    Comedy: 'Comedy',
    Crime: 'Crime',
    Drama: 'Drama',
    Horror: 'Horror',
    "Sci-Fi": "Sci-Fi",
    Thriller: 'Thriller',
    Biography: 'Biography',
    Documentary: 'Documentary',
    Family: 'Family',
    Fantasy: 'Fantasy',
    History: 'History',
    Music: 'Music',
    Musical: 'Musical',
    Mystery: 'Mystery',
    Romance: 'Romance',
    Short: 'Short',
    Sport: 'Sport',
    War: 'War',
    Western: 'Western'
  };

  const rating = {
    '': 'All',
    '9': '+9',
    '8': '+8',
    '7': '+7',
    '6': '+6',
    '5': '+5',
    '4': '+4',
    '3': '+3',
    '2': '+2',
    '1': '+1'
  };
  
  const limit = {
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50'
  };
  
  const sort_by = {
    '': 'All',
    date_added: 'Date Added',
    title: 'Title',
    year: 'Year',
    rating: 'Rating',
    seeds: 'Seeds',
    like_count: 'Like Count'
  };

  const handleFilterChange = (key, value) => {
    dispatch(setFilters({[key]: value}));
  };
   
  return (
    <div className="bg-linear-to-br from-purple-900 via-blue-900 to-black py-16 px-4 md:px-20 relative z-40">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 flex-1 w-full">
            <Dropdown_btn 
              title="Quality" 
              options={quality} 
              icon={faVideo} 
              value={filters.quality}
              onSelect={(val) => handleFilterChange('quality', val)}
            />
            <Dropdown_btn 
              title="Genres" 
              options={genres} 
              icon={faFilm} 
              value={filters.genre}
              onSelect={(val) => handleFilterChange('genre', val)}
            />
            <Dropdown_btn 
              title="Rating" 
              options={rating} 
              icon={faStar} 
              value={filters.rating}
              onSelect={(val) => handleFilterChange('rating', val)}
            />
            <Dropdown_btn 
              title="Limit" 
              options={limit} 
              icon={faListOl} 
              value={filters.limit}
              onSelect={(val) => handleFilterChange('limit', val)}
            />
            <Dropdown_btn 
              title="Sort By" 
              options={sort_by}   
              icon={faCalendar} 
              value={filters.sort_by}
              onSelect={(val) => handleFilterChange('sort_by', val)}
            />
          </div>

          <button
            onClick={() => dispatch(clearFilters())}
            className="flex items-center gap-3 bg-linear-to-r from-[#FFB800] via-[#FF8C00] to-[#FF6B00] text-white shadow-lg hover:shadow-[0_0_25px_rgba(255,184,0,0.6)] hover:scale-105 px-6 py-4 rounded-2xl font-bold uppercase tracking-tighter transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Clear Filters
          </button>
        </div>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-5 rounded-xl bg-linear-to-r from-[#FFB800] to-[#FF6B00] text-white shadow-[0_0_30px_rgba(255,184,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
export default MoviesFilter;
