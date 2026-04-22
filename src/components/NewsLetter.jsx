import React from 'react';

function Newsletter() {
    return (
        <div className="bg-[#02021C] py-24 px-6 border-t border-white/10">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                    Never miss a <br className="hidden md:block" />

                    <span className="text-[#00D395] drop-shadow-[0_0_20px_rgba(0,211,149,0.3)]">
                        Cinematic Masterpiece.
                    </span>
                </h2>

            <p className="text-gray-300 text-sm md:text-md font-bold max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight">
                Get early notifications on 4K releases, trending genres, and MOVIORA’s weekly
                top-rated selections. No clutter, just the <span className="text-white">best of cinema.</span>
            </p>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
            >
                <div className="relative w-full group">
                    <input
                        type="email"
                        placeholder="Enter your email for the front row seat..."
                        className="w-full bg-white/3 border border-white/10 rounded-2xl px-6 py-5 text-white font-bold text-sm outline-none 
                         transition-all duration-500 placeholder:text-gray-300
                         hover:bg-white/7 hover:border-[#FFB800]/40
                         focus:border-[#FFB800] focus:bg-[#02021C] focus:ring-4 focus:ring-[#FFB800]/10"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto whitespace-nowrap px-12 py-5 bg-[#FFB800] text-[#02021C] font-black uppercase text-xs tracking-[0.15em] rounded-2xl 
                       hover:scale-105 active:scale-95 transition-all duration-500
                       shadow-[0_15px_40px_rgba(255,184,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,184,0,0.5)]"
                >
                    Join Now
                </button>
            </form>


            <div className="mt-10 flex items-center justify-center gap-2 opacity-50">
                <div className="h-px w-8 bg-gray-300"></div>
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.25em]">
                    Trusted by 50k+ Movie Buffs
                </p>
                <div className="h-px w-8 bg-gray-300"></div>
            </div>

        </div>
        </div >
    );
}

export default Newsletter;