import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SimilarMovies from "../components/SimilarMovies";
import { Star, Play, Calendar, Clock, User, ArrowLeft, X, ChevronLeft, ChevronRight, Heart} from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { fetchMoviesDetail } from "../services/movieApi";

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [lightboxIndex, setLightboxIndex] = useState(null)

    const { data: movie, isLoading, isError } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => fetchMoviesDetail(id),
        staleTime: 10000,
    });

    const handleGoBack = () => {
        if (location.state?.fromSimilar) {
            navigate('/', { replace: true });
        } else {
            navigate(-1);
        }
    };

    const screenshots = movie ? [
        movie.large_screenshot_image1,
        movie.large_screenshot_image2,
        movie.large_screenshot_image3,
    ].filter(Boolean).slice(0, 3) : [];

    const trailerCode = movie?.yt_trailer_code || movie?.trailer_code || movie?.trailer;

    const nextImage = () => {
        if (lightboxIndex < screenshots.length - 1) {
            setLightboxIndex(lightboxIndex + 1);
        }
    };

    const prevImage = () => {
        if (lightboxIndex > 0) {
            setLightboxIndex(lightboxIndex - 1);
        }
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
                prevImage();
            } else if (e.key === 'ArrowRight' && lightboxIndex !== null) {
                nextImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    if (isLoading || !movie) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
                <div className="w-16 h-16 border-4 border-t-[#FFB800] border-white/10 rounded-full animate-spin"></div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00] mt-4 font-bold animate-pulse uppercase tracking-widest">
                    Loading Movie Details...
                </p>
            </div>
        );
    }

    if (isError || !movie) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white text-center py-20">
                <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30">
                    <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-400 font-bold">Error loading movie details.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white font-sans">

            <div className="max-w-7xl mx-auto px-6 pt-6">
                <button
                    onClick={handleGoBack}
                    className="flex items-center gap-2 text-white/70 hover:text-[#FFB800] transition-all duration-300 group mb-4"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold">Go Back</span>
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 lg:col-span-4 flex justify-center">
                    <div className="relative group rounded-2xl overflow-hidden border border-[#FFB800]/30 shadow-[0_0_40px_rgba(255,184,0,0.3)] hover:shadow-[0_0_60px_rgba(255,184,0,0.5)] transition-all duration-500">
                        <img
                            src={movie.large_cover_image}
                            alt={movie.title}
                            className="w-full h-120 object-cover transform transition duration-700 group-hover:scale-105"
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
                            }}
                        />
                    </div>
                </div>

                <div className="md:col-span-7 lg:col-span-8 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-1">
                            <Star size={20} className="text-[#FFB800] fill-[#FFB800]" />
                            <span className="text-2xl text-white font-bold">{movie.rating || "N/A"}</span>
                        </div>

                        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {movie.title}
                        </h1>
                        {movie.title_english && movie.title_english !== movie.title && (
                            <h2 className="text-xl text-gray-300">{movie.title_english}</h2>
                        )}

                        <div className="flex flex-wrap gap-6 text-gray-200">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-[#FFB800]" />
                                <span className="text-white">{movie.year}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-[#FFB800]" />
                                <span className="text-white">{movie.runtime} min</span>
                            </div>

                            <div className="flex flex-wrap gap-2.5 pt-2">
                                {movie.genres?.map((g, i) => (
                                    <span
                                        key={i}
                                        className="text-white text-xs font-medium bg-gradient-to-r from-[#FFB800]/20 to-[#FF6B00]/20 border border-[#FFB800]/40 shadow-[0_0_12px_rgba(255,184,0,0.2)] px-3.5 py-1 rounded-full uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,184,0,0.4)] transition-all duration-300"
                                    >
                                        {g}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold border-l-4 border-[#FFB800] pl-4">
                                Storyline
                            </h3>
                            <p className="text-gray-200 mt-4 italic leading-relaxed">
                                {movie.description_full || movie.description || "No description available"}
                            </p>
                        </div>

                        <div className="flex items-center gap-5 pt-4">
                            <button className="group relative flex items-center gap-3 px-10 py-3.5 bg-gradient-to-r from-[#FFB800] to-[#FF6B00] font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,184,0,0.5)]">
                                <Play className="w-4 h-4 fill-current" />
                                <span>Watch Now</span>
                            </button>

                            <button className="px-10 py-3.5 bg-white/10 text-white font-bold uppercase tracking-widest text-xs rounded-full border border-white/20 backdrop-blur-md hover:bg-white hover:text-purple-900 transition-all duration-300">
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {movie.cast && movie.cast.length > 0 && (
                <>
                    <h3 className="text-3xl font-bold border-l-4 italic border-[#FFB800] pl-4 mb-6 mx-20 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        Cast & Crew
                    </h3>
                    <div className="flex mx-20 flex-wrap gap-6 mb-12">
                        {movie.cast.slice(0, 10).map((actor, i) => (
                            <div key={i} className="flex flex-col items-center text-center w-24 group">
                                {actor.url_small_image ? (
                                    <img
                                        src={actor.url_small_image}
                                        alt={actor.name}
                                        className="w-20 h-20 rounded-full object-cover border-2 border-[#FFB800] shadow-lg group-hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] group-hover:scale-105 transition-all duration-300"
                                    />
                                ) : (
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center border-2 border-[#FFB800]">
                                        <User size={18} className="text-[#FFB800]" />
                                    </div>
                                )}
                                <span className="mt-2 text-xs text-white font-semibold text-center group-hover:text-[#FFB800] transition-colors">
                                    {actor.name}
                                </span>
                                <span className="text-[#FFB800] text-[10px] text-center">
                                    {actor.character_name || "Cast"}
                                </span>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-4xl italic font-bold tracking-tight mb-6">
                    Trailer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00]">Preview</span>
                </h2>

                {trailerCode ? (
                    <div className="aspect-video w-full md:w-2/3 rounded-xl overflow-hidden border border-[#FFB800]/20 shadow-[0_0_30px_rgba(255,184,0,0.2)]">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${trailerCode}`}
                            title="Movie Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <div className="w-full md:w-2/3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-12 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <Play size={48} className="text-[#FFB800]/50" />
                            <p className="text-gray-300 text-lg font-semibold">No Trailer Available</p>
                            <p className="text-gray-500 text-sm">Trailer not found for this movie</p>
                        </div>
                    </div>
                )}
            </div>

            {screenshots.length > 0 ? (
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-4xl font-bold mb-6 italic">
                        Screenshots <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00]">Gallery</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {screenshots.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setLightboxIndex(i)}
                                className="group relative aspect-video rounded-xl overflow-hidden border-2 border-white/10 cursor-pointer hover:border-[#FFB800] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,184,0,0.3)]"
                            >
                                <img src={img} alt={`Screenshot ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const parent = e.target.parentElement;
                                        if (parent) {
                                            const fallback = document.createElement('div');
                                            fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50';
                                            fallback.innerHTML = '<p class="text-gray-400">Image not available</p>';
                                            parent.appendChild(fallback);
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm bg-gradient-to-r from-[#FFB800] to-[#FF6B00] px-3 py-1 rounded-full transition-all duration-300">
                                        Click to enlarge
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h2 className="text-4xl font-bold mb-6 italic">
                        Screenshots <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00]">Gallery</span>
                    </h2>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-12 text-center">
                        <p className="text-gray-400">No screenshots available for this movie</p>
                    </div>
                </div>
            )}

            <SimilarMovies movieId={id} />

            {lightboxIndex !== null && screenshots[lightboxIndex] && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            closeLightbox();
                        }
                    }}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-5 right-5 text-white hover:text-[#FFB800] transition-all duration-300 z-[10000] bg-black/50 rounded-full p-2 hover:scale-110"
                        aria-label="Close"
                        style={{ cursor: 'pointer' }}
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={prevImage}
                        disabled={lightboxIndex === 0}
                        className={`absolute left-5 text-white hover:text-[#FFB800] transition-all duration-300 bg-black/50 rounded-full p-2 hover:scale-110 ${lightboxIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                        aria-label="Previous"
                        style={{ cursor: lightboxIndex === 0 ? 'not-allowed' : 'pointer' }}
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <img
                        src={screenshots[lightboxIndex]}
                        alt={`Screenshot ${lightboxIndex + 1}`}
                        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border border-[#FFB800]/30"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={nextImage}
                        disabled={lightboxIndex === screenshots.length - 1}
                        className={`absolute right-5 text-white hover:text-[#FFB800] transition-all duration-300 bg-black/50 rounded-full p-2 hover:scale-110 ${lightboxIndex === screenshots.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                            }`}
                        aria-label="Next"
                        style={{ cursor: lightboxIndex === screenshots.length - 1 ? 'not-allowed' : 'pointer' }}
                    >
                        <ChevronRight size={40} />
                    </button>

                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFB800] to-[#FF6B00] text-white px-4 py-2 rounded-full text-sm font-bold">
                        {lightboxIndex + 1} / {screenshots.length}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailPage;
