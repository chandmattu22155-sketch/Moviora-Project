import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function HeroInfo() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://movies-api.accel.li/api/v2/list_movies.json?limit=10&sort_by=trending_score');
                const json = await response.json();
                if (json.data && json.data.movies) {
                    setMovies(json.data.movies);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (loading) return (
        <div className="h-[80vh] flex items-center justify-center bg-[#02021C]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFB800]"></div>
        </div>
    );

    return (
        <div className="w-full min-h-[90vh] flex items-center bg-[#02021C] px-6 md:px-16 lg:px-24 py-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
                
                <div className="flex flex-col space-y-6 animate-fade-in-left">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></span>
                        <p className="text-white text-[17px] font-semibold tracking-widest uppercase">
                            Taste Your Favourite Movie
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                        <span className="text-[#FFB800]">Mo</span>
                        <span className="text-white">vior<span className='text-[#FFB800]'>a</span></span>
                    </h1>

                    <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                        Taste <span className="text-[#FFB800] italic">the Best of <br /> Top Mo<span className='text-white'>vies</span></span>
                    </h2>

                    <p className="text-white text-sm md:text-base max-w-md leading-relaxed">
                        Curated cinematic experiences delivered in bite-sized brilliance.
                    </p>

                    <div className="flex gap-3 mt-6 animate-fade-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                        <button className="bg-[#FFB800] border border-transparent hover:bg-[#FFFFFF] text-[#02021C] px-5 py-2 rounded-full text-[11px] font-semibold uppercase flex items-center gap-2 transition-all duration-300 shadow-lg shadow-amber-500/20 group animate-float">
                            <span>Start Watching</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button className="border border-white/20 text-white px-5 py-2 rounded-full text-[11px] font-semibold uppercase hover:bg-transparent hover:border-[#A855F7] hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 animate-float [animation-delay:200ms]">
                            Explore Catalog
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center">
                  
                    <div className="absolute -inset-4 bg-[#FFB800]/20 blur-[60px] rounded-full opacity-50"></div>

        
                    <div className="relative rounded-[2.5rem] p-px bg-linear-to-br from-[#FFB800] via-[#FDE047] to-[#B45309] shadow-[0_0_25px_rgba(255,184,0,0.4)] overflow-hidden max-w-[320px] md:max-w-95 mx-auto transition-transform duration-1000 cursor-pointer hover:scale-90">
                        
                        <div className="relative rounded-[2.4rem] overflow-hidden bg-[#050528]">
                            <Swiper
                                modules={[Autoplay, Pagination, EffectFade]}
                                effect={'fade'}
                                speed={1000}
                                autoplay={{ delay: 6000, disableOnInteraction: false }}
                                pagination={{ clickable: true }}
                                loop={movies.length > 1}
                                onSlideChange={() => setKey(prev => prev + 1)}
                                className="h-105 md:h-125 w-full"
                            >
                                {movies.map((movie) => (
                                    <SwiperSlide key={movie.id}>
                                        <div className="relative w-full h-full group">
                                            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                                <span className="text-yellow-400 text-xs">★</span>
                                                <span className="text-white text-xs font-bold">{movie.rating || "N/A"}</span>
                                            </div>

                                            <img
                                                src={movie.large_cover_image || movie.background_image}
                                                alt={movie.title}
                                                className="h-full w-full object-cover transition-all duration-600 group-hover:scale-105"
                                            />

                                            
                                            <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black via-black/70 to-transparent pt-20">
                                                <h3 className="text-white text-lg md:text-xl font-black leading-tight drop-shadow-2xl">
                                                    {movie.title}
                                                </h3>
                                                <p className="text-[#FFB800] text-[10px] font-bold uppercase tracking-widest mt-1 opacity-90">
                                                    {movie.genres?.[0] || 'Trending Now'}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-30">
                                <div
                                    key={key}
                                    className="h-full bg-white shadow-[0_0_10px_#FFB800]"
                                    style={{ animation: 'progress 2s linear forwards' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .animate-float {
                    animation: float 2s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }

                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }

                .animate-fade-in-left {
                    animation: fadeLeft 0.8s ease forwards;
                }

                @keyframes fadeLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    background: #FFB800 !important;
                    opacity: 1;
                    width: 20px;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
}

export default HeroInfo;


