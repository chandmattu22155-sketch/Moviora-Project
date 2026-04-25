import React, { useState, useEffect } from 'react';
import Dropdown_btn from './Dropdown_btn';
import { faCalendar, faStar, faListOl, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';

function MoviesFilter({ onFilterChange, resetFilters, setResetFilters }) {

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

  const handleClearFilters = () => {
    onFilterChange({
      quality: "",
      genre: "",
      rating: "",
      limit: "20",
      sort_by: ""
    });
    if (setResetFilters) {
      setResetFilters(prev => !prev);
    }
  };

  return (
    <div className="bg-[#02021C] py-16 px-4 md:px-20 relative z-40">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 flex-1 w-full">
            <Dropdown_btn 
              title="Quality" 
              options={quality} 
              icon={faVideo} 
              resetFilters={resetFilters} 
              onSelect={(val) => onFilterChange(prev => ({ ...prev, quality: val }))} 
            />
            <Dropdown_btn 
              title="Genres" 
              options={genres} 
              icon={faFilm} 
              resetFilters={resetFilters} 
              onSelect={(val) => onFilterChange(prev => ({ ...prev, genre: val }))} 
            />
            <Dropdown_btn 
              title="Rating" 
              options={rating} 
              icon={faStar} 
              resetFilters={resetFilters} 
              onSelect={(val) => onFilterChange(prev => ({ ...prev, rating: val }))} 
            />
            <Dropdown_btn 
              title="Limit" 
              options={limit} 
              icon={faListOl} 
              resetFilters={resetFilters} 
              onSelect={(val) => onFilterChange(prev => ({ ...prev, limit: val }))} 
            />
            <Dropdown_btn 
              title="Sort By" 
              options={sort_by} 
              icon={faCalendar} 
              resetFilters={resetFilters} 
              onSelect={(val) => onFilterChange(prev => ({ ...prev, sort_by: val }))} 
            />
          </div>

          <button
            onClick={handleClearFilters}
            className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.8)] hover:scale-105 px-6 py-4 rounded-2xl font-bold uppercase tracking-tighter transition-all duration-900"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-5 rounded-xl border-2 border-[#FFB800] text-[#02021C] bg-[#FFB800] shadow-[0_0_30px_rgba(255,184,0,0.5)] animate-bounce hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default MoviesFilter;

