import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { fetchMoviesList } from '../services/movieApi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function HeroInfo() {
  
    const [key, setKey] = useState(0);

    const { data: movies = [], isLoading, error } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMoviesList,
        staleTime: 1000 * 60 * 5
    });

    if (isLoading) return (
        <div className="h-screen flex items-center justify-center bg-linear-to-br from-purple-900 via-blue-900 to-black">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FFB800]"></div>
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                   
                    <div className="flex flex-col space-y-4 md:space-y-6 animate-fade-in-left z-10">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FFB800] animate-pulse"></span>
                            <p className="text-white text-xs md:text-sm font-semibold tracking-widest uppercase">
                                WATCH ANYWHERE, ANYTIME
                            </p>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            Prime<span className="text-[#FFB800]">Cinema</span>
                        </h1>

                        <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Unlimited <span className="text-[#FFB800]">Movies,</span> <br />
                            <span className="text-white">Unlimited</span> <span className="text-[#FFB800]">Entertainment</span>
                        </h2>

                        <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
                            Stream the latest blockbusters, timeless classics, and exclusive originals in stunning 4K quality. Your next favorite movie is just a click away.
                        </p>

                      
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6c0 2.5 1.5 4.5 3 6.5 1 1.5 2 3 2 5h2c0-2 1-3.5 2-5 1.5-2 3-4 3-6.5a6 6 0 00-6-6z"/>
                                </svg>
                                <span className="text-white text-xs">4K Ultra HD</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                </svg>
                                <span className="text-white text-xs">Multi-Device</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5z"/>
                                </svg>
                                <span className="text-white text-xs">Dolby Atmos</span>
                            </div>
                        </div>

                      
                        <div className="flex flex-wrap gap-3 mt-6 animate-fade-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                            <button className="bg-[#FFB800] hover:bg-[#FFA000] text-black px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase flex items-center gap-2 transition-all duration-300 shadow-lg shadow-amber-500/30 group transform hover:scale-105">
                                <span>Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button className="border-2 border-white/30 text-white px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                View Plans
                            </button>
                        </div>

                   
                        <div className="flex gap-6 mt-8 pt-4 border-t border-white/10">
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white">10K+</p>
                                <p className="text-gray-400 text-xs">Movies Available</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
                                <p className="text-gray-400 text-xs">Original Series</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
                                <p className="text-gray-400 text-xs">Customer Support</p>
                            </div>
                        </div>
                    </div>

                   
                    <div className="relative flex justify-center items-center mt-8 lg:mt-0">
                       
                        <div className="absolute -inset-4 bg-[#FFB800]/20 blur-[80px] rounded-full opacity-40"></div>

                    
                        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-35">
                            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-white/10">
                                <Swiper
                                    modules={[Autoplay, Pagination, EffectFade]}
                                    effect={'fade'}
                                    speed={1000}
                                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                                    pagination={{ clickable: true }}
                                    loop={movies.length > 1}
                                    onSlideChange={() => setKey(prev => prev + 1)}
                                    className="h-[400px] md:h-[500px] lg:h-130 w-full"
                                >
                                    {movies.slice(0, 10).map((movie) => (
                                        <SwiperSlide key={movie.id}>
                                            <div className="relative w-full h-full group">
                                               
                                                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                                                    <span className="text-yellow-400 text-xs">★</span>
                                                    <span className="text-white text-xs font-bold">{movie.rating || "8.5"}</span>
                                                </div>

                                               
                                                <img
                                                    src={movie.large_cover_image || movie.medium_cover_image || movie.background_image}
                                                    alt={movie.title}
                                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                                />

                                               
                                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80"></div>
                                                
                                                
                                                <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black via-black/80 to-transparent">
                                                    <h3 className="text-white text-lg md:text-xl font-black leading-tight drop-shadow-2xl mb-1">
                                                        {movie.title.length > 30 ? movie.title.substring(0, 27) + '...' : movie.title}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <p className="text-[#FFB800] text-[10px] font-bold uppercase tracking-wider">
                                                            {movie.genres?.[0] || 'Action'} • {movie.year || '2024'}
                                                        </p>
                                                        <span className="text-white/50 text-xs">|</span>
                                                        <p className="text-white/70 text-[10px]">
                                                            {movie.runtime ? `${movie.runtime} min` : '2h 15min'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Progress Bar */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
                                    <div
                                        key={key}
                                        className="h-full bg-gradient-to-r from-[#FFB800] to-[#FFA000] shadow-[0_0_10px_#FFB800]"
                                        style={{ animation: 'progress 5s linear forwards' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }

                .animate-fade-in-left {
                    animation: fadeLeft 0.8s ease forwards;
                }

                @keyframes fadeLeft {
                    from { opacity: 0; transform: translateX(-40px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.5;
                    width: 8px;
                    height: 8px;
                }
                .swiper-pagination-bullet-active {
                    background: #FFB800 !important;
                    opacity: 1;
                    width: 24px;
                    border-radius: 4px;
                }
                
                /* Custom Scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                ::-webkit-scrollbar-track {
                    background: #1a1a1a;
                }
                ::-webkit-scrollbar-thumb {
                    background: #FFB800;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
}

export default HeroInfo;
